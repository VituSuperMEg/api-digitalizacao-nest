import { Module } from '@nestjs/common';
import { BancosController } from './bancos.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { BancosServices } from './bancos.service';

@Module({
  controllers: [BancosController],
  providers: [BancosServices, PrismaService],
})
export class BancosModule {}
