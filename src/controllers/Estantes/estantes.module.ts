import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
import { EstantesController } from './estantes.controller';
import { EstantesServices } from './estantes.service';

@Module({
  controllers: [EstantesController],
  providers: [EstantesServices, PrismaService, ResponseService],
})
export class EstanteModule {}
