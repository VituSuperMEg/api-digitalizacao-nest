import { Module } from '@nestjs/common';
import { ConnectionService } from 'src/services/conexaoDB';
import { CaixasService } from './caixas.service';
import { caixasProviders } from './caixas.providers';
import { CaixasController } from './caixas.controller';
import { DatabaseModule } from 'src/config/database.module';
import { AuthModule } from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Caixas } from 'src/models/caixas.entity';

@Module({
  imports: [DatabaseModule, AuthModule, TypeOrmModule.forFeature([Caixas])],
  controllers: [CaixasController],
  providers: [...caixasProviders, ConnectionService, CaixasService],
})
export class CaixasModule {}
