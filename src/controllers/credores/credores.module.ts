import { Module } from '@nestjs/common';
import { CredoresController } from './credores.controller';
import { CredoresService } from './credores.service';
import { ResponseService } from 'src/services/response-message';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { AppUtil } from 'src/services/app-util';

@Module({
  controllers: [CredoresController],
  providers: [PrismaService, ResponseService, CredoresService, AppUtil],
})
export class CredoresModule {}
