import { Module } from '@nestjs/common';
import { EntidadesModule } from './entidades/entidades.module';
import { ConnectionService } from './services/conexaoDB';

@Module({
  imports: [EntidadesModule],
  controllers: [],
  providers: [ConnectionService],
})
export class AppModule {}
