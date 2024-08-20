import { Module } from '@nestjs/common';
import { UnidadeOrcamentariaController } from './unidade-orcamentaria.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
import { UnidadeOrcamentariaService } from './unidade-orcamentaria.service';

@Module({
  controllers: [UnidadeOrcamentariaController],
  providers: [PrismaService, ResponseService, UnidadeOrcamentariaService],
})
export class UnidadeOrcamentariaModule {}
