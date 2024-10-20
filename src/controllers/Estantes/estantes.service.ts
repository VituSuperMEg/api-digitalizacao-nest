import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';

import { paginate } from 'src/helpers/pagination.helper';
import { CreateEstantesDTO } from './dto/create-estante.dto';
import { UpdateEstantesDTO } from './dto/update-estante.dto';

@Injectable()
export class EstantesServices {
  constructor(
    private readonly db: PrismaService,
    private readonly responseService: ResponseService,
  ) {}

  findAll() {
    return this.db.estante.findMany();
  }

  find(id: number) {
    return this.db.estante.findFirst({
      where: { id: id },
    });
  }

  async create(data: CreateEstantesDTO) {
    try {
      await this.db.estante.create({
        data: {
          descricao: data.descricao.toUpperCase(),
          criado_por: global.SESSION.id,
        },
      });
      this.responseService.success({}, 'Registro Criado com sucesso');
    } catch (error) {
      this.responseService.error('Não foi possível criar a caixa', error);
    }
  }

  async update(data: UpdateEstantesDTO) {
    try {
      await this.db.estante.update({
        where: { id: data.id },
        data: {
          descricao: data.descricao.toUpperCase(),
          alterado_por: global.SESSION.id,
          alterado_em: new Date(),
        },
      });
      this.responseService.success({}, 'Registro Atualizado com sucesso');
    } catch (error) {
      this.responseService.error('Não foi possível atualizar a caixa', error);
    }
  }

  async remove(id: number) {
    await this.db.estante.delete({
      where: { id: id },
    });
    this.responseService.success({}, 'Registro Excluído com Sucesso');
  }

  async getPaginatedItems(page: number, limit: number) {
    return await paginate(this.db.estante, { page, limit });
  }
}
