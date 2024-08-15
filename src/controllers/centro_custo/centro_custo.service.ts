import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
import { CreateCentroCustoDTO } from './dto/create-centro-custo.dto';
import { UpdateCentroCusto } from './dto/update-centro-custo.dto';

@Injectable()
export class CentroCustoService {
  constructor(
    private readonly db: PrismaService,
    private readonly responseService: ResponseService,
  ) {}

  findAll() {
    return this.db.centroCusto.findMany();
  }

  find(id: number) {
    return this.db.centroCusto.findFirst({
      where: { id: id },
    });
  }

  async create(data: CreateCentroCustoDTO) {
    try {
      await this.db.centroCusto.create({
        data: {
          cod_entidade: data.cod_entidade,
          cod_centro_custo: data.cod_centro_custo,
          descricao: data.descricao.toUpperCase(),
          criado_por: global.SESSION.id,
        },
      });
      return this.responseService.success(
        {},
        'Centro de Custo criado com sucesso!',
      );
    } catch (error) {
      return this.responseService.error(
        'Ocorreu um erro ao tentar criar o centro de custo.',
        error,
      );
    }
  }

  async update(data: UpdateCentroCusto) {
    try {
      await this.db.centroCusto.update({
        where: { id: data.id },
        data: {
          cod_entidade: data.cod_entidade,
          cod_centro_custo: data.cod_centro_custo,
          descricao: data.descricao.toUpperCase(),
          ativo: data.ativo,
          alterado_em: new Date(),
          alterado_por: global.SESSION.id,
        },
      });
      return this.responseService.success(
        {},
        'Centro de Custo criado com sucesso!',
      );
    } catch (error) {
      return this.responseService.error(
        'Ocorreu um erro ao tentar criar o centro de custo.',
        error,
      );
    }
  }

  async remove(id: number) {
    await this.db.centroCusto.delete({
      where: { id: id },
    });
    return this.responseService.success({}, 'Registro Excluído com sucesso!');
  }
}
