import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
import { CreateGavetaDTO } from './dto/create-gaveta.dto';
import { UpdateGavetaDTO } from './dto/update-gaveta.dto';

@Injectable()
export class GavetaService {
  constructor(
    private readonly db: PrismaService,
    private readonly responseService: ResponseService,
  ) {}

  findAll() {
    return this.db.gaveta.findMany();
  }

  find(id: number) {
    return this.db.gaveta.findFirst({
      where: { id: id },
    });
  }

  async create(data: CreateGavetaDTO) {
    try {
      await this.db.gaveta.create({
        data: {
          descricao: data.descricao.toUpperCase(),
          sala_id: data.sala_id,
          armario_id: data.armario_id,
          criado_por: global.SESSION.id,
        },
      });
      this.responseService.success({}, 'Gaveta criada com sucesso.');
    } catch (error) {
      this.responseService.error('Falha ao tentar criar a gaveta.', error);
    }
  }

  async update(data: UpdateGavetaDTO) {
    try {
      await this.db.gaveta.update({
        where: { id: data.id },
        data: {
          descricao: data.descricao.toUpperCase(),
          sala_id: data.sala_id,
          armario_id: data.armario_id,
          alterado_por: global.SESSION.id,
          alterado_em: new Date(),
        },
      });
      this.responseService.success({}, 'Gaveta atualizada com sucesso.');
    } catch (error) {
      this.responseService.error('Falha ao tentar criar a gaveta.', error);
    }
  }

  remove(id: number) {
    this.db.gaveta.delete({
      where: { id: id },
    });
    this.responseService.success({}, 'Gaveta excluída com sucesso.');
  }
}
