import { Module } from '@nestjs/common';
import { CaixasController } from './caixas.controller';
import { CaixasServices } from './caixas.service';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';

@Module({
  controllers: [CaixasController],
  providers: [CaixasServices, PrismaService, ResponseService],
})
export class CaixasModule {}
