import { Module } from '@nestjs/common';
import { SetoresController } from './setores.controller';
import { SetoresServices } from './setores.service';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';

@Module({
  controllers: [SetoresController],
  providers: [SetoresServices, PrismaService, ResponseService],
})
export class SetoresModule {}
