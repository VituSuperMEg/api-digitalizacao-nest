import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
import { CreateCredorDTO } from './dto/create-credor.dto';
import { AppUtil } from 'src/services/app-util';

@Injectable()
export class CredoresService {
  constructor(
    private readonly db: PrismaService,
    private readonly responseService: ResponseService,
    private readonly appUtil: AppUtil,
  ) {}

  async findAll() {
    const credores = await this.db.credores.findMany();
    return credores;
  }

  async find(id: number) {
    const credor = await this.db.credores.findFirst({
      where: { id: id },
    });
    if (!credor) {
      this.responseService.error('Credor não encontrado');
      return;
    }
    return credor;
  }

  async create(data: CreateCredorDTO) {
    const {
      agencia,
      banco,
      cep,
      cidade,
      conta,
      cpf,
      email,
      logradouro,
      nome,
      numero,
      observacoes,
      telefone,
      telefone_complementar,
      tipo_documento,
    } = data;

    const cpfClear = this.appUtil.clearMask(cpf);
    const telefoneClear = this.appUtil.clearMask(telefone);
    const telefoneComplementarClear = this.appUtil.clearMask(telefone);
    const cepClear = this.appUtil.clearMask(cep);

    await this.db.credores.create({
      data: {
        agencia,
        banco,
        cep: cepClear,
        cidade,
        conta,
        cpf: cpfClear,
        email,
        logradouro,
        nome,
        numero,
        observacoes,
        telefone: telefoneClear,
        telefone_complementar: telefoneComplementarClear,
        tipo_documento,
        criado_por: global.SESSION.id,
      },
    });
    return this.responseService.success({}, 'Registro criado com Sucesso');
  }
}
