import { Module } from '@nestjs/common';
import { ArmarioController } from './armario.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
import { ArmarioService } from './armario.service';

@Module({
  controllers: [ArmarioController],
  providers: [PrismaService, ResponseService, ArmarioService],
})
export class ArmarioModule {}
