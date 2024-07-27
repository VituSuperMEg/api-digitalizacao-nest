import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersServices } from './users.service';
import { AuthAndDatabaseGuard } from 'src/config/guards/auth.guards';

@Controller('/api/v1/users')
@UseGuards(AuthAndDatabaseGuard)
export class UsersController {
  constructor(private readonly services: UsersServices) {}

  @Get()
  async findAll() {
    return await this.services.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: number) {
    return await this.services.find(+id);
  }
}
