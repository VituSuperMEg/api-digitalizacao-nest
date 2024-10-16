import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';
import { CreateCredorDTO } from './dto/create-credor.dto';
import { AppUtil } from 'src/services/app-util';
import { UpdateCredorDTO } from './dto/update-credor.dto';
import { paginate } from 'src/helpers/pagination.helper';

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

  listOptions(descricao: string) {
    return this.db.credores.findMany({
      where: { nome: { contains: descricao, mode: 'insensitive' } },
      take: 10,
    });
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
    const telefoneComplementarClear = this.appUtil.clearMask(
      telefone_complementar,
    );
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

  async update(data: UpdateCredorDTO) {
    const {
      id,
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
    const telefoneComplementarClear = this.appUtil.clearMask(
      telefone_complementar,
    );
    const cepClear = this.appUtil.clearMask(cep);

    await this.db.credores.update({
      where: { id: id },
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
        alterado_por: global.SESSION.id,
        alterado_em: new Date(),
      },
    });
    return this.responseService.success({}, 'Registro Alterado com Sucesso');
  }

  async remove(id: number) {
    await this.db.credores.delete({
      where: { id: id },
    });
    return this.responseService.success({}, 'Registro Excluído com Sucesso');
  }

  async getPaginatedItems(page: number, limit: number) {
    return await paginate(this.db.credores, { page, limit });
  }
}
