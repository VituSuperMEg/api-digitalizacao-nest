import { Module } from '@nestjs/common';
import { ConnectionService } from 'src/services/conexaoDB';
import { CaixasService } from './caixas.service';
import { caixasProviders } from './caixas.providers';
import { CaixasController } from './caixas.controller';
import { DatabaseModule } from 'src/config/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CaixasController],
  providers: [...caixasProviders, ConnectionService, CaixasService],
})
export class CaixasModule {}
