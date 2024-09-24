import { Injectable } from '@nestjs/common';
import { paginate } from 'src/helpers/pagination.helper';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateSetoresDTO } from './dto/create-setores.dto';

@Injectable()
export class SetoresServices {
  constructor(private readonly db: PrismaService) {}

  indAll() {
    return this.db.tiposDocumentos.findMany();
  }

  async getPaginatedItems(page: number, limit: number) {
    return await paginate(this.db.setores, { page, limit });
  }

  find(id: number) {
    return this.db.tiposDocumentos.findFirst({
      where: { id: id },
    });
  }

  create(data: CreateSetoresDTO) {
    return this.db.setores.create({
      data: {
        descricao: data.descricao.toUpperCase(),
      },
    });
  }

  update(data: CreateTiposDocumentosDTO) {
    return this.db.setores.update({
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
