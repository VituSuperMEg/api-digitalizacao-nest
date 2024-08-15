import { Module } from '@nestjs/common';
import { ContasExtrasController } from './contas_extras.controller';
import { ContasExtrasService } from './contas_extras.service';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';

@Module({
  controllers: [ContasExtrasController],
  providers: [ContasExtrasService, PrismaService, ResponseService],
})
export class ContasExtrasModule {}
