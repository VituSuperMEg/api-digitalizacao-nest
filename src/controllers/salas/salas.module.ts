import { Module } from '@nestjs/common';
import { SalasServices } from './salas.service';
import { SalasController } from './salas.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { Controller } from '../controller.service';

@Module({
  controllers: [SalasController],
  providers: [SalasServices, PrismaService, Controller],
})
export class SalasModule {}
