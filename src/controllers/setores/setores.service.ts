import { Injectable } from '@nestjs/common';
import { paginate } from 'src/helpers/pagination.helper';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateSetoresDTO } from './dto/create-setores.dto';
import { UpdateSetoresDto } from './dto/update-setores.dto';
import { ResponseService } from 'src/services/response-message';

@Injectable()
export class SetoresServices {
  constructor(
    private readonly db: PrismaService,
    private readonly responseService: ResponseService,
  ) {}

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
        unidade_orcamentaria_id: data.unidade_orcamentaria_id,
      },
    });
  }

  update(data: UpdateSetoresDto) {
    return this.db.setores.update({
      where: { id: data.id },
      data: {
        descricao: data.descricao.toUpperCase(),
        unidade_orcamentaria_id: data.unidade_orcamentaria_id,
      },
    });
  }

  delete(id: number) {
    return this.db.tiposDocumentos.delete({
      where: { id: id },
    });
  }
}
