import { Module } from '@nestjs/common';
import { PrateleiraController } from './prateleira.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
import { PrateleiraService } from './prateleira.service';

@Module({
  controllers: [PrateleiraController],
  providers: [PrateleiraService, PrismaService, ResponseService],
})
export class PrateleiraModule {}
