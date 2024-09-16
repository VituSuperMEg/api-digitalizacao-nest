import { Module } from '@nestjs/common';
import { TiposDocumentosController } from './tipos-documentos.controller';
import { TiposDocumentosService } from './tipos-documentos.service';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
@Module({
  controllers: [TiposDocumentosController],
  providers: [TiposDocumentosService, PrismaService, ResponseService],
})
export class TiposDocumentosModule {}
