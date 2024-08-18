import { Injectable } from '@nestjs/common';
import { PaginationService } from 'src/services/pagination.service';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
import { CreateCompartimentoDTO } from './dto/create-compartimento.dto';
import { UpdateCompartimentoDTO } from './dto/update-compartimento.dto';

@Injectable()
export class CompartimentoService {
  constructor(
    private readonly db: PrismaService,
    private readonly responseService: ResponseService,
    private readonly pagination: PaginationService,
  ) {}

  findAll() {
    return this.db.compartimento.findMany();
  }

  findPagination(page: number, limit: number) {
    return this.pagination.paginate(this.db.compartimento, page, limit);
  }

  find(id: number) {
    return this.db.compartimento.findFirst({
      where: { id: id },
    });
  }

  async create(data: CreateCompartimentoDTO) {
    try {
      await this.db.compartimento.create({
        data: {
          descricao: data.descricao.toUpperCase(),
          sala_id: data.sala_id,
          armario_id: data.armario_id,
          gaveta_id: data.gaveta_id,
          criado_por: global.SESSION.id,
        },
      });
      return this.responseService.success(
        {},
        'Compartimento cadastrado com sucesso!',
      );
    } catch (error) {
      this.responseService.error('Erro ao cadastrar compartimento', error);
    }
  }

  async update(data: UpdateCompartimentoDTO) {
    try {
      await this.db.compartimento.update({
        where: { id: data.id },
        data: {
          descricao: data.descricao.toUpperCase(),
          sala_id: data.sala_id,
          armario_id: data.armario_id,
          gaveta_id: data.gaveta_id,
          alterado_por: global.SESSION.id,
          alterado_em: new Date(),
        },
      });
      return this.responseService.success(
        {},
        'Compartimento atualizado com sucesso!',
      );
    } catch (error) {
      this.responseService.error(
        'Erro ao tentar atualizar compartimento',
        error,
      );
    }
  }

  remove(id: number) {
    this.db.compartimento.delete({
      where: { id: id },
    });
    this.responseService.success({}, 'Compartimento excluído com sucesso!');
  }
}
