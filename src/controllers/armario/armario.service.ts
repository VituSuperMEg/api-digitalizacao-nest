import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
import { CreateArmaroDTO } from './dto/create-armario.dto';
import { UpdateArmarioDTO } from './dto/update-armario.dto';

@Injectable()
export class ArmarioService {
  constructor(
    private readonly db: PrismaService,
    private readonly responseService: ResponseService,
  ) {}

  async findAll() {
    const armarios = await this.db.armario.findMany({
      select: {
        id: true,
        descricao: true,
        salas: {
          select: {
            id: true,
            descricao: true,
          },
        },
      },
    });
    return armarios;
  }

  async find(id: number) {
    const armario = await this.db.armario.findFirst({
      where: { id: id },
      select: {
        id: true,
        descricao: true,
        salas: {
          select: {
            id: true,
            descricao: true,
          },
        },
      },
    });
    if (!armario) {
      this.responseService.error('Este registro não existe!');
    }
    return armario;
  }

  async create(data: CreateArmaroDTO) {
    await this.db.armario.create({
      data: {
        descricao: data.descricao,
        salas_id: data.sala_id,
      },
    });
    return this.responseService.success({}, 'Registro criado com Sucesso!');
  }

  async update(data: UpdateArmarioDTO) {
    const { id, descricao } = data;

    const armario = await this.db.armario.findFirst({
      where: { id: id },
    });

    if (!armario) {
      this.responseService.error('Este registro não existe!');
    }

    await this.db.armario.update({
      where: { id: id },
      data: {
        descricao: descricao,
      },
    });

    return this.responseService.success({}, 'Registro Alterado com Sucesso!');
  }

  async remove(id: number) {
    const armario = await this.db.armario.findFirst({
      where: { id: id },
    });

    if (!armario) {
      this.responseService.error('Este registro não existe!');
    }

    await this.db.armario.delete({
      where: { id: id },
    });

    return this.responseService.success({}, 'Registro excluído com Sucesso!');
  }
}
