import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { configuracoes } from '../clients';
import { ConnectionService } from 'src/services/conexaoDB';

@Injectable()
export class DatabaseGuard implements CanActivate {
  constructor(private readonly connectionService: ConnectionService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const cliente = request.params.cliente;

    if (cliente) {
      const config = configuracoes.database[cliente];
      if (!config) {
        return false;
      }

      const connection = await this.connectionService.getConnection({
        type: 'postgres',
        host: config.host,
        port: config.port,
        username: config.username,
        password: config.password,
        database: config.database,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        name: cliente,
      });

      (request as any).dbConnection = connection;
    }
    return true;
  }
}
