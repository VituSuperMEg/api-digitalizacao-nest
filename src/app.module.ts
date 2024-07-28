import 'dotenv/config';
import { Module } from '@nestjs/common';
import { EntidadesModule } from './entidades/entidades.module';
import { AuthModule } from './controllers/auth/auth.module';
import { PrismaService } from './services/prisma/prisma.service';
import { DynamicDatabaseGuard } from './config/guards/database.guard';
import { UsersModule } from './controllers/users/users.module';
import { AnoMesModule } from './controllers/ano_mes/ano_mes.module';
import { SalasModule } from './controllers/salas/salas.module';

@Module({
  imports: [
    EntidadesModule,
    AuthModule,
    UsersModule,
    AnoMesModule,
    SalasModule,
  ],
  controllers: [],
  providers: [PrismaService, DynamicDatabaseGuard],
})
export class AppModule {}
