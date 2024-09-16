import { ResponseService } from 'src/services/response-message';
import { PrismaService } from './../../services/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUnidadeOrcamentariaDTO } from './dto/create-unidade-orcamentaria.dto';
import { UpdateUnidadeOrcamentariaDTO } from './dto/update-unidade-orcamentaria.dto';

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
      console.log(error)
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

  remove(id: number) {
    this.db.unidadeOrcamentaria.delete({
      where: { id: id },
    });
    this.responseService.success(
      null,
      'Unidade Orçamentária excluída com sucesso!',
    );
  }
}
