import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { AuthModule } from '../auth/auth.module';
import { credoresProviders } from './credores.providers';
import { ConnectionService } from 'src/services/conexaoDB';

@Module({
  imports: [DatabaseModule, AuthModule],
  providers: [...credoresProviders, ConnectionService],
})
export class CredoresModule {}
