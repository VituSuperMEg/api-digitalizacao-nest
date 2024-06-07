import { Module, Global, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { ConnectionService } from 'src/services/conexaoDB';

@Global()
@Module({
  providers: [
    ConnectionService,
    {
      provide: 'DATA_SOURCE',
      scope: Scope.REQUEST,
      useFactory: async (
        connectionService: ConnectionService,
        request: any,
      ) => {
        const entityId = request.headers['x-cliente-id'];

        if (!entityId) {
          throw new Error('Entity ID not provided in the request headers');
        }
        return connectionService.getConnection(entityId);
      },
      inject: [ConnectionService, REQUEST],
    },
  ],
  exports: ['DATA_SOURCE', ConnectionService],
})
export class DatabaseModule {}
