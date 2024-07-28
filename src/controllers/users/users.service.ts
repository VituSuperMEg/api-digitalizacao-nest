import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { CreateUsersDTO } from './dto/create-users.dto';
import { hash } from 'bcrypt';
import { ResponseService } from 'src/services/response-message';
import { UpdateUsersDto } from './dto/update-users.dto';

@Injectable()
export class UsersServices {
  constructor(
    private readonly db: PrismaService,
    private readonly responseService: ResponseService,
  ) {}

  findAll() {
    return this.db.users.findMany();
  }

  find(id: number) {
    return this.db.users.findFirst({
      where: { id: id },
    });
  }

  async create(data: CreateUsersDTO) {
    try {
      const { nome, login, senha, email, telefone } = data;

      const hashPassword = await hash(senha, 10);

      const user = await this.db.users.findFirst({
        where: { email: email },
      });
      if (user) {
        return this.responseService.error(
          'Já existe um usuário com este e-mail!',
        );
      }
      await this.db.users.create({
        data: {
          nome: nome,
          email: email,
          login: login,
          senha: hashPassword,
          ativo: 'S',
          telefone: telefone,
        },
      });
      return this.responseService.success(
        {},
        'Usuário cadastrado com sucesso!',
      );
    } catch (err) {
      return this.responseService.error('Erro', err);
    }
  }

  async update(data: UpdateUsersDto) {
    const { id, nome, email, telefone, ativo, login, senha } = data;

    const user = await this.db.users.findFirst({
      where: { email: email, id: id },
    });
    if (!user) {
      return this.responseService.error(
        'Já existe um usuário com este e-mail!',
      );
    }
    const newPasswordHash = await hash(senha, 10);
    await this.db.users.update({
      where: { id: id },
      data: {
        nome: nome,
        email: email,
        telefone: telefone,
        ativo: ativo,
        login: login,
        senha: newPasswordHash,
      },
    });
    return this.responseService.success({}, 'Registro Alterado com Sucesso!');
  }

  async remove(id: number) {
    const user = await this.db.users.findFirst({
      where: { id: id },
    });
    if (!user) {
      this.responseService.error(
        'Este usuário não existe em nossa base de dados. Por favor entre em contato com operador do sistema!',
      );
    }
    await this.db.users.delete({
      where: { id: id },
    });
    return this.responseService.success({}, 'Regristo excluído com sucesso!');
  }
}
