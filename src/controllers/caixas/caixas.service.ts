import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
import { CreateCaixasDTO } from './dto/create-caixas.dto';
import { UpdateCaixasDTO } from './dto/update-caixas.dto';
import { paginate } from 'src/helpers/pagination.helper';

@Injectable()
export class CaixasServices {
  constructor(
    private readonly db: PrismaService,
    private readonly responseService: ResponseService,
  ) {}

  findAll() {
    return this.db.caixas.findMany();
  }

  find(id: number) {
    return this.db.caixas.findFirst({
      where: { id: id },
    });
  }

  async create(data: CreateCaixasDTO) {
    try {
      await this.db.caixas.create({
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

  async update(data: UpdateCaixasDTO) {
    try {
      await this.db.caixas.update({
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
    await this.db.caixas.delete({
      where: { id: id },
    });
    this.responseService.success({}, 'Registro Excluído com Sucesso');
  }

  async getPaginatedItems(page: number, limit: number) {
    return await paginate(this.db.caixas, { page, limit });
  }
}
