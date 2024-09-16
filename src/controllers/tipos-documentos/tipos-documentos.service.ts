import { Injectable } from '@nestjs/common';
import { ResponseService } from 'src/services/response-message';
import { CreateTiposDocumentosDTO } from './dto/create-tipos-documentos.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class TiposDocumentosService {
  constructor(
    private db: PrismaService,
    private responseService: ResponseService,
  ) {}

  findAll() {
    return this.db.tiposDocumentos.findMany();
  }

  find(id: number) {
    return this.db.tiposDocumentos.findFirst({
      where: { id: id },
    });
  }

  create(data: CreateTiposDocumentosDTO) {
    return this.db.tiposDocumentos.create({
      data: {
        id: data.id,
        descricao: data.descricao.toUpperCase(),
      },
    });
  }

  update(data: CreateTiposDocumentosDTO) {
    return this.db.tiposDocumentos.update({
      where: { id: data.id },
      data: {
        descricao: data.descricao.toUpperCase(),
      },
    });
  }

  delete(id: number) {
    return this.db.tiposDocumentos.delete({
      where: { id: id },
    });
  }
}
