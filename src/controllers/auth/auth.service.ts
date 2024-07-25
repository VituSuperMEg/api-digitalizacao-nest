import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { ResponseService } from 'src/services/response-message';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private readonly responseService: ResponseService,
  ) {}

  async signIn(login: string, pass: string, res: Response): Promise<any> {
    const user = await this.usersService.findLogin(login);

    if (!user) {
      return this.responseService.error('Este usuário não existe');
    }
    // const decode = await compare(pass, user.senha);

    // if (!decode) {
    //   throw new UnauthorizedException();
    // }
    const payload = { sub: user.id, username: user.login };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
