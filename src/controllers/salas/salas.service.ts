import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
import { CreateSalasDTO } from './dto/create-salas.dto';
import { UpdateSalasDTO } from './dto/update-salas.dto';

@Injectable()
export class SalasServices {
  constructor(
    private readonly db: PrismaService,
    private readonly responseService: ResponseService,
  ) {}

  async findAll() {
    return this.db.salas.findMany();
  }

  async find(id: number) {
    return this.db.salas.findFirst({
      where: { id: id },
    });
  }

  async create(data: CreateSalasDTO) {
    try {
      await this.db.salas.create({
        data: {
          descricao: data.descricao.toUpperCase(),
          criado_por: global.SESSION.id,
        },
      });
      return this.responseService.success({}, 'Registro criado com sucesso!');
    } catch (error) {
      this.responseService.error('Erro ao tentar criar a sala', error);
    }
  }

  async update(data: UpdateSalasDTO) {
    try {
      const exists = await this.db.salas.findFirst({
        where: { id: data.id },
      });
      if (!exists) {
        return this.responseService.error('Este registro não existe!');
      }
      await this.db.salas.update({
        where: { id: data.id },
        data: {
          descricao: data.descricao,
          alterado_por: global.SESSION.id,
          alterado_em: new Date(),
        },
      });
      return this.responseService.success(
        {},
        'Registro atualizado com sucesso!',
      );
    } catch (error) {
      this.responseService.error('Erro ao tentar atualizar a sala', error);
    }
  }

  async remove(id: number) {
    try {
      await this.db.salas.delete({
        where: { id: id },
      });
      return this.responseService.success({}, 'Registro excluído com sucesso!');
    } catch (error) {
      this.responseService.error('Erro ao tentar excluir a sala', error);
    }
  }
}
