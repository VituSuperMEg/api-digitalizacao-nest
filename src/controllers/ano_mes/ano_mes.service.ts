import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateAnoMesDTO } from './dto/create.ano_mes.dto';
import { ResponseService } from 'src/services/response-message';
import { AppUtil } from 'src/services/app-util';

@Injectable()
export class AnoMesService {
  constructor(
    private readonly db: PrismaService,
    private readonly responseService: ResponseService,
    private readonly appUtil: AppUtil,
  ) {}

  async findAll() {
    const sql = await this.db.anoMes.findMany();
    const data = [];
    sql.forEach((item) => {
      data.push({
        id: item.id,
        ano: item.ano,
        mes: this.appUtil.formatarMes(item.mes),
      });
    });
    return data;
  }

  async find(id: number) {
    const sql = await this.db.anoMes.findFirst({
      where: { id: id },
    });
    const formattedMonth = this.appUtil.formatarMes(sql.mes);

    const data = {
      ...sql,
      mes: formattedMonth,
    };

    return data;
  }

  async create(data: CreateAnoMesDTO) {
    const exists = await this.db.anoMes.findFirst({
      where: {
        ano: data.ano,
        mes: data.mes,
      },
    });
    if (exists) {
      this.responseService.error(
        `Jà existe este mesmo ano ${data.ano} e este mesmo mês ${this.appUtil.formatarMes(data.mes)} cadastado!`,
      );
    }
    await this.db.anoMes.create({
      data: {
        ano: data.ano,
        mes: data.mes,
      },
    });
    return this.responseService.success({}, 'Registrado criado com sucesso!');
  }

  async remove(id: number) {
    const exits = await this.db.anoMes.findFirst({
      where: { id: id },
    });
    if (!exits) {
      return this.responseService.error('Este registro não existe!');
    }
    await this.db.anoMes.delete({
      where: {
        id: id,
      },
    });
    return this.responseService.success({}, 'Registro excluído com sucesso!');
  }
}
