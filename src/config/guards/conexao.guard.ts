import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { ConnectionService } from 'src/services/conexaoDB';

@Injectable()
export class DatabaseGuard implements CanActivate {
  constructor(private readonly connectionService: ConnectionService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const client_id = request.headers['x-cliente-id'];
    const cliente = String(client_id);

    if (!cliente) {
      console.error('Cliente não fornecido nos parâmetros da solicitação.');
      return false;
    }

    try {
      const connection = await this.connectionService.getConnection(cliente);
      (request as any).dbConnection = connection;
      return true;
    } catch (error) {
      console.error(
        `Erro de conexão ao banco de dados para o cliente ${cliente}:`,
        error,
      );
      return false;
    }
  }
}
