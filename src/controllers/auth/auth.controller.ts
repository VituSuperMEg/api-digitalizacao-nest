import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DynamicDatabaseGuard } from 'src/config/guards/database.guard';

@Controller('login')
@UseGuards(DynamicDatabaseGuard)
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post()
  async login(@Body() data: any): Promise<string> {
    const { login, pass } = data;
    return this.service.signIn(login, pass);
  }
}
