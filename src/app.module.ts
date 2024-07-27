import 'dotenv/config';
import { Module } from '@nestjs/common';
import { EntidadesModule } from './entidades/entidades.module';
import { AuthModule } from './controllers/auth/auth.module';
import { PrismaService } from './services/prisma/prisma.service';
import { DynamicDatabaseGuard } from './config/guards/database.guard';

@Module({
  imports: [EntidadesModule, AuthModule],
  controllers: [],
  providers: [PrismaService, DynamicDatabaseGuard],
})
export class AppModule {}
