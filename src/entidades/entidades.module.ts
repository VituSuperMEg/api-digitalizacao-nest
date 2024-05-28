import { Module } from '@nestjs/common';
import { EntidadesController } from './entidades.controller';
import { ConnectionService } from 'src/services/conexaoDB';

@Module({
  imports: [],
  controllers: [EntidadesController],
  providers: [ConnectionService],
})
export class EntidadesModule {}
