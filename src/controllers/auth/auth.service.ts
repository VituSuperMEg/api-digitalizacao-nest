import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
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
    // Assegure-se de que o Prisma Service está usando a conexão correta
    const prisma = this.prismaService.getPrismaClient();

    const user = await prisma.users.findFirst({
      where: { login: login },
    });

    if (!user) {
      return this.responseService.error('Este usuário não existe');
    }

    // Verifique a senha (adapte para seu método de verificação)
    // const decode = await compare(pass, user.senha);
    // if (!decode) {
    //   throw new UnauthorizedException();
    // }

    const payload = { sub: user.id, username: user.login };
    return {
      session: await this.jwtService.signAsync(payload),
    };
  }
}
