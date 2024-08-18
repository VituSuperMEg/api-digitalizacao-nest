import { Module } from '@nestjs/common';
import { GavetaController } from './gaveta.controller';
import { GavetaService } from './gaveta.service';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
import { PaginationService } from 'src/services/pagination.service';

@Module({
  controllers: [GavetaController],
  providers: [GavetaService, PrismaService, ResponseService, PaginationService],
})
export class GavetaModule {}
