import { Module } from '@nestjs/common';
import { CompartimentoController } from './compartimento.controller';
import { CompartimentoService } from './compartimento.service';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';

@Module({
  controllers: [CompartimentoController],
  providers: [CompartimentoService, PrismaService, ResponseService],
})
export class CompartimentoModule {}
