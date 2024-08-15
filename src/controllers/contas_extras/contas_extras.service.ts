import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
import { CreateContaDTO } from './dto/create-conta.dto';
import { UpdateContaDTO } from './dto/update-conta.dto';

@Injectable()
export class ContasExtrasService {
  constructor(
    private readonly db: PrismaService,
    private readonly responseService: ResponseService,
  ) {}

  findAll() {
    return this.db.contasExtras.findMany();
  }

  find(id: number) {
    return this.db.contasExtras.findFirst({
      where: { id: id },
    });
  }

  async create(data: CreateContaDTO) {
    try {
      await this.db.contasExtras.create({
        data: {
          descricao: data.descricao.toUpperCase(),
          codigo: data.codigo,
          exercicio: data.exercicio,
          orcamento: data.orcamento,
          criado_por: global.SESSION.id,
        },
      });
      this.responseService.success({}, 'Registro Criado com sucesso!');
    } catch (err) {
      this.responseService.error('Erro', err);
    }
  }

  async update(data: UpdateContaDTO) {
    try {
      await this.db.contasExtras.update({
        where: { id: data.id },
        data: {
          descricao: data.descricao.toUpperCase(),
          codigo: data.codigo,
          exercicio: data.exercicio,
          orcamento: data.orcamento,
          alterado_por: global.SESSION.id,
          alterado_em: new Date(),
        },
      });
    } catch (err) {
      this.responseService.error('Erro', err);
    }
  }

  async remove(id: number) {
    await this.db.contasExtras.delete({ where: { id: id } });
    this.responseService.success({}, 'Registro Excluído com sucesso!');
  }
}
