import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
import { AnoMesController } from './ano_mes.controller';
import { AnoMesService } from './ano_mes.service';
import { AppUtil } from 'src/services/app-util';

@Module({
  controllers: [AnoMesController],
  providers: [PrismaService, ResponseService, AnoMesService, AppUtil],
})
export class AnoMesModule {}
