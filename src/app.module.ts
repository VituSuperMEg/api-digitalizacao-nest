import 'dotenv/config';
import { Module } from '@nestjs/common';
import { EntidadesModule } from './entidades/entidades.module';
import { AuthModule } from './controllers/auth/auth.module';
import { PrismaService } from './services/prisma/prisma.service';
import { DynamicDatabaseGuard } from './config/guards/database.guard';
import { UsersModule } from './controllers/users/users.module';
import { AnoMesModule } from './controllers/ano_mes/ano_mes.module';
import { SalasModule } from './controllers/salas/salas.module';
import { ArmarioModule } from './controllers/armario/armario.module';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { SessionInterceptor } from './customs/interceptor/session.interceptor';
import { CredoresModule } from './controllers/credores/credores.module';
import { OrgaosModule } from './controllers/orgaos/orgaos.module';
import { ValidationPipe } from './pipes/validation.pipe';

@Module({
  imports: [
    EntidadesModule,
    AuthModule,
    UsersModule,
    AnoMesModule,
    SalasModule,
    ArmarioModule,
    CredoresModule,
    OrgaosModule,
  ],
  controllers: [],
  providers: [
    PrismaService,
    DynamicDatabaseGuard,
    {
      provide: APP_INTERCEPTOR,
      useClass: SessionInterceptor,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
