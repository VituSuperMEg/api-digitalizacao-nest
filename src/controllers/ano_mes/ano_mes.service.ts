import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { AnoMesDTO } from './dto/create.ano_mes.dto';
import { ResponseService } from 'src/services/response-message';

@Injectable()
export class AnoMesService {
  constructor(
    private readonly db: PrismaService,
    private readonly responseService: ResponseService,
  ) {}

  findAll() {
    return this.db.anoMes.findMany();
  }

  find(id: number) {
    return this.db.anoMes.findFirst({
      where: { id: id },
    });
  }

  async create(data: AnoMesDTO) {
    await this.db.anoMes.create({
      data: {
        ano: data.ano,
        mes: data.mes,
      },
    });
    return this.responseService.success({}, 'Registrado criado com sucesso!');
  }
}
