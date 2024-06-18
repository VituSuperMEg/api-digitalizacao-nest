import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('login')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post()
  async login(@Body() data: any, res: Response): Promise<string> {
    const { login, pass } = data;
    return this.service.signIn(login, pass, res);
  }
}
