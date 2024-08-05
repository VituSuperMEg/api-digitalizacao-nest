import { Module } from '@nestjs/common';
import { OrgaosController } from './orgaos.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { OrgaosService } from './orgaos.service';
import { ResponseService } from 'src/services/response-message';
import { AppUtil } from 'src/services/app-util';

@Module({
  controllers: [OrgaosController],
  providers: [PrismaService, OrgaosService, ResponseService, AppUtil],
})
export class OrgaosModule {}
