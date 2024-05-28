import { Injectable } from '@nestjs/common';
import { getConnectionManager, Connection, ConnectionOptions } from 'typeorm';

@Injectable()
export class ConnectionService {
  private readonly connections: Map<string, Connection> = new Map();

  async getConnection(dbConfig: ConnectionOptions): Promise<Connection> {
    const connectionManager = getConnectionManager();
    const connectionName = dbConfig.name || 'default';

    if (this.connections.has(connectionName)) {
      return this.connections.get(connectionName);
    }

    const connection = await connectionManager.create(dbConfig).connect();
    this.connections.set(connectionName, connection);
    return connection;
  }
}
