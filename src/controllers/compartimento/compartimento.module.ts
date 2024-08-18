import { Module } from '@nestjs/common';
import { CompartimentoController } from './compartimento.controller';
import { CompartimentoService } from './compartimento.service';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
import { PaginationService } from 'src/services/pagination.service';

@Module({
  controllers: [CompartimentoController],
  providers: [
    CompartimentoService,
    PrismaService,
    ResponseService,
    PaginationService,
  ],
})
export class CompartimentoModule {}
