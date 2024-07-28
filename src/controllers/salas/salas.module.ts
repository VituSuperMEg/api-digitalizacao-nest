import { Module } from '@nestjs/common';
import { SalasServices } from './salas.service';
import { SalasController } from './salas.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';

@Module({
  controllers: [SalasController],
  providers: [SalasServices, PrismaService, ResponseService],
})
export class SalasModule {}
