import { Module } from '@nestjs/common';
import { EntidadesModule } from './entidades/entidades.module';
import { ConnectionService } from './services/conexaoDB';
import { CaixasModule } from './controllers/caixas/caixas.module';

@Module({
  imports: [EntidadesModule, CaixasModule],
  controllers: [],
  providers: [ConnectionService],
})
export class AppModule {}
