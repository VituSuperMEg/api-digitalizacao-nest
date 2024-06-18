import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { jwtConstants } from 'src/constants/constants';
import { ConnectionService } from 'src/services/conexaoDB';

@Injectable()
export class AuthAndDatabaseGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private connectionService: ConnectionService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }

    const client_id = request.headers['x-cliente-id'];
    const cliente = String(client_id);

    if (!cliente) {
      console.error('Cliente não fornecido nos parâmetros da solicitação.');
      throw new UnauthorizedException('Cliente ID não fornecido.');
    }

    try {
      const connection = await this.connectionService.getConnection(cliente);
      (request as any).dbConnection = connection;
    } catch (error) {
      console.error(
        `Erro de conexão ao banco de dados para o cliente ${cliente}:`,
        error,
      );
      throw new UnauthorizedException(
        `Erro de conexão ao banco de dados para o cliente ${cliente}`,
      );
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
