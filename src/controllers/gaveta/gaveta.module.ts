import { Module } from '@nestjs/common';
import { GavetaController } from './gaveta.controller';
import { GavetaService } from './gaveta.service';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';

@Module({
  controllers: [GavetaController],
  providers: [GavetaService, PrismaService, ResponseService],
})
export class GavetaModule {}
