import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
import { AnoMesController } from './ano_mes.controller';

@Module({
  controllers: [AnoMesController],
  providers: [PrismaService, ResponseService],
})
export class AnoMes {}
