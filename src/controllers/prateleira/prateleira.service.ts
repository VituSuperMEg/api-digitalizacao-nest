import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
import { CreatePrateleiraDTO } from './dto/create-prateleira.dto';
import { UpdatePrateleiraDTO } from './dto/update-prateleira.dto';

@Injectable()
export class PrateleiraService {
  constructor(
    private readonly db: PrismaService,
    private readonly responseService: ResponseService,
  ) {}

  findAll() {
    return this.db.prateleira.findMany();
  }

  find(id: number) {
    return this.db.prateleira.findFirst({
      where: { id: id },
    });
  }

  async create(data: CreatePrateleiraDTO) {
    try {
      await this.db.prateleira.create({
        data: {
          descricao: data.descricao.toUpperCase(),
          criado_por: global.SESSION.id,
        },
      });
      this.responseService.success({}, 'Registro Criado com sucesso!');
    } catch (err) {
      this.responseService.error('Erro ao tentar criar a prateleira', err);
    }
  }

  async update(data: UpdatePrateleiraDTO) {
    try {
      await this.db.prateleira.update({
        where: { id: data.id },
        data: {
          descricao: data.descricao.toUpperCase(),
          alterado_por: global.SESSION.id,
          alterado_em: new Date(),
        },
      });
      this.responseService.success({}, 'Registro Alterado com sucesso!');
    } catch (err) {
      this.responseService.error('Erro ao tentar criar a prateleira', err);
    }
  }

  remove(id: number) {
    this.db.prateleira.delete({
      where: { id: id },
    });
    this.responseService.success({}, 'Registro Excluído com Sucesso!');
  }
}
