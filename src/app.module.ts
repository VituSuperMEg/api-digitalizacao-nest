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
import { CaixasModule } from './controllers/caixas/caixas.module';
import { PrateleiraModule } from './controllers/prateleira/prateleira.module';
import { ContasExtrasModule } from './controllers/contas_extras/contas_extras.module';
import { CentroCustoModule } from './controllers/centro_custo/centro_custo.module';
import { GavetaModule } from './controllers/gaveta/gaveta.module';
import { CompartimentoModule } from './controllers/compartimento/compartimento.module';
import { UnidadeOrcamentariaModule } from './controllers/unidade_orcamentaria/unidade-orcamentaria.module';
import { TiposDocumentosModule } from './controllers/tipos-documentos/tipos-documentos.module';
import { SetoresModule } from './controllers/setores/setores.module';

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
    CaixasModule,
    PrateleiraModule,
    ContasExtrasModule,
    CentroCustoModule,
    GavetaModule,
    CompartimentoModule,
    UnidadeOrcamentariaModule,
    TiposDocumentosModule,
    SetoresModule,
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
