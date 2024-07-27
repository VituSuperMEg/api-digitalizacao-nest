import { Injectable } from '@nestjs/common';
import { configuracoes } from 'src/config/clients';
import {
  getConnectionManager,
  Connection,
  ConnectionOptions,
  DataSourceOptions,
} from 'typeorm';

type Config = {
  type: string;
  host: string;
  port: string;
  username: string;
  database: string;
  password: string;
};

@Injectable()
export class ConnectionService {
  private readonly connections: Map<string, Connection> = new Map();

  async getConnection(entidade: string): Promise<Connection> {
    const dbConfig = configuracoes.database[entidade] as Config &
      DataSourceOptions;
    if (!dbConfig) {
      throw new Error(
        `Configuração do banco de dados para a entidade ${entidade} não encontrada.`,
      );
    }

    const connectionManager = getConnectionManager();
    const connectionName = dbConfig.database || 'default';

    if (connectionManager.has(connectionName)) {
      const existingConnection = connectionManager.get(connectionName);
      if (existingConnection.isConnected) {
        return existingConnection;
      } else {
        await existingConnection.connect();
        return existingConnection;
      }
    }

    const connectionOptions: ConnectionOptions = {
      type: dbConfig.type as any,
      host: dbConfig.host,
      port: parseInt(dbConfig.port, 10),
      username: dbConfig.username,
      password: dbConfig.password,
      database: dbConfig.database,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      name: connectionName,
    };

    try {
      const connection = connectionManager.create(connectionOptions);
      await connection.connect();
      this.connections.set(connectionName, connection);
      return connection;
    } catch (error) {
      console.error(
        `Erro ao conectar ao banco de dados ${connectionName}:`,
        error,
      );
      throw error;
    }
  }
}
