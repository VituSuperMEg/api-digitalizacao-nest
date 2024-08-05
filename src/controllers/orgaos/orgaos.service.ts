import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateOrgaosDTO } from './dto/create-orgao.dto';
import { ResponseService } from 'src/services/response-message';
import { AppUtil } from 'src/services/app-util';

@Injectable()
export class OrgaosService {
  constructor(
    private readonly db: PrismaService,
    private readonly responseService: ResponseService,
    private readonly appUtil: AppUtil,
  ) {}

  async findAll() {
    return this.db.orgaos.findMany();
  }

  async find(id: number) {
    return this.db.orgaos.findFirst({
      where: { id: id },
    });
  }

  async create(data: CreateOrgaosDTO) {
    try {
      const cpf = this.appUtil.clearMask(data.cpf);
      await this.db.orgaos.create({
        data: {
          sigla: data.sigla,
          cpf: cpf,
          responsavel: data.responsavel.toUpperCase(),
          num_expediente: data.num_expediente,
          descricao: data.descricao.toUpperCase(),
          criado_por: global.SESSION.id,
        },
      });
      return this.responseService.success({}, 'Regiostro Criado com Sucesso!');
    } catch (error) {
      throw new Error(error);
    }
  }
}
