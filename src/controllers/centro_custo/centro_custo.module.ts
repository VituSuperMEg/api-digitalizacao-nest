import { Module } from '@nestjs/common';
import { CentroCustoController } from './centro_custo.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CentroCustoService } from './centro_custo.service';
import { ResponseService } from 'src/services/response-message';

@Module({
  controllers: [CentroCustoController],
  providers: [PrismaService, CentroCustoService, ResponseService],
})
export class CentroCustoModule {}
