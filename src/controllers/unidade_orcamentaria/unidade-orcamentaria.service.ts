import { ResponseService } from 'src/services/response-message';
import { PrismaService } from './../../services/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUnidadeOrcamentariaDTO } from './dto/create-unidade-orcamentaria.dto';
import { UpdateUnidadeOrcamentariaDTO } from './dto/update-unidade-orcamentaria.dto';
import { paginate } from 'src/helpers/pagination.helper';

@Injectable()
export class UnidadeOrcamentariaService {
  constructor(
    private readonly db: PrismaService,
    private readonly responseService: ResponseService,
  ) {}

  findAll() {
    return this.db.unidadeOrcamentaria.findMany();
  }

  find(id: number) {
    return this.db.unidadeOrcamentaria.findFirst({
      where: { id: id },
    });
  }

  listOptions(descricao: string) {
    return this.db.unidadeOrcamentaria.findMany({
      where: { descricao: { contains: descricao, mode: 'insensitive' } },
      take: 10,
    });
  }

  async create(data: CreateUnidadeOrcamentariaDTO) {
    try {
      await this.db.unidadeOrcamentaria.create({
        data: {
          descricao: data.descricao.toUpperCase(),
          cnpj: data.cnpj,
          cod_orgao: data.cod_orgao,
          cod_unidade_orcamentaria: data.cod_unidade_orcamentaria,
          responsavel: data.responsavel,
          ativo: 'S',
          criado_por: global.SESSION.id,
        },
      });
      this.responseService.success(
        null,
        'Unidade Orçamentária criada com sucesso!',
      );
    } catch (error) {
      this.responseService.error(
        'Erro ao tentar criar a Unidade Orçamentária',
        error,
      );
    }
  }

  async update(data: UpdateUnidadeOrcamentariaDTO) {
    try {
      await this.db.unidadeOrcamentaria.update({
        where: { id: data.id },
        data: {
          descricao: data.descricao.toUpperCase(),
          cnpj: data.cnpj,
          ativo: data.ativo,
          alterado_em: new Date(),
          alterado_por: global.SESSION.id,
        },
      });
      this.responseService.success(
        null,
        'Unidade Orçamentária atualizada com sucesso!',
      );
    } catch (error) {
      this.responseService.error(
        'Erro ao tentar atualizar a Unidade Orçamentária',
        error,
      );
    }
  }

  async remove(id: number) {
    try {
      const unidadeOrcamentaria = await this.db.unidadeOrcamentaria.findUnique({
        where: { id: id },
      });

      if (!unidadeOrcamentaria) {
        return this.responseService.error(
          'Unidade Orçamentária não encontrada!',
        );
      }
      await this.db.unidadeOrcamentaria.delete({
        where: { id: id },
      });

      return this.responseService.success(
        null,
        'Unidade Orçamentária excluída com sucesso!',
      );
    } catch (error) {
      return this.responseService.error(
        'Erro ao excluir a Unidade Orçamentária!',
        error.message,
      );
    }
  }

  async getPaginatedItems(page: number, limit: number) {
    return await paginate(this.db.unidadeOrcamentaria, { page, limit });
  }
}
