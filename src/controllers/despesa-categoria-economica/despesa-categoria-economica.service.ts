import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
import { CreateDespesaCategoriaEconomicaDTO } from './dto/create-despesa-categoria-economica';
import { UpdateDespesaCategoriaEconomica } from './dto/update-despesa-categoria-economica';

@Injectable()
export class DespesaCategoriaEconomica {
  constructor(
    private readonly db: PrismaService,
    private readonly responseService: ResponseService,
  ) {}

  findAll() {
    return this.db.despesaCategoriaEconomica.findMany();
  }

  find(id: number) {
    return this.db.despesaCategoriaEconomica.findFirst({
      where: { id: id },
    });
  }

  async create(data: CreateDespesaCategoriaEconomicaDTO) {
    try {
      await this.db.despesaCategoriaEconomica.create({
        data: {
          descricao: data.descricao.toUpperCase(),
          cod_municipio: data.cod_municipio,
          exercicio: data.exercicio,
          cod_orgao: +data.cod_orgao,
          cod_unid_orc: +data.cod_unid_orc,
          codigo_elmento: data.codigo_elmento,
          criado_por: global.SESSION.id,
        },
      });
      this.responseService.success(
        null,
        'Despesa Categoria Economica criada com sucesso!',
      );
    } catch (err) {
      this.responseService.error(
        'Erro ao tentar cadastrar a despesa categoria economica',
        err,
      );
    }
  }

  async update(data: UpdateDespesaCategoriaEconomica) {}
}
