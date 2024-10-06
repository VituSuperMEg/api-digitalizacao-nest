import { ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { configuracoes } from 'src/config/clients';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private jwtService: JwtService,
    private readonly responseService: ResponseService,
  ) {}

  async signIn(login: string, pass: string): Promise<any> {
    const prisma = this.prismaService.getPrismaClient();

    const user = await prisma.users.findFirst({
      where: { login: login },
    });

    if (!user) {
      return this.responseService.error('Este usuário não existe');
    }

    const cliente = configuracoes.database[global.CLIENTE_ID];
    global.SESSION = {
      id: user.id,
    };

    const payload = {
      sub: user.id,
      id: user.id,
      email: user.email,
      ativo: user.ativo,
      username: user.login,
      cliente_id: global.CLIENTE_ID,
      cliente: {
        database: cliente.database,
      },
    };

    return {
      session: await this.jwtService.signAsync(payload),
    };
  }
}
