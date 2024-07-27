import 'dotenv/config';
import { Module } from '@nestjs/common';
import { EntidadesModule } from './entidades/entidades.module';
import { ConnectionService } from './services/conexaoDB';
import { CaixasModule } from './controllers/caixas/caixas.module';
import { AuthModule } from './controllers/auth/auth.module';

@Module({
  imports: [EntidadesModule, CaixasModule, AuthModule],
  controllers: [],
  providers: [ConnectionService],
})
export class AppModule {}
