import { Module } from '@nestjs/common';
import { EntidadesController } from './entidades.controller';

@Module({
  imports: [],
  controllers: [EntidadesController],
  providers: [],
})
export class EntidadesModule {}
