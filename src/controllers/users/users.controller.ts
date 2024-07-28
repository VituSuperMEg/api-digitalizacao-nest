import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UsersServices } from './users.service';
import { AuthAndDatabaseGuard } from 'src/config/guards/auth.guards';
import { CreateUsersDTO } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';

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

  @Post()
  async create(@Body() data: CreateUsersDTO) {
    return this.services.create(data);
  }

  @Put()
  async update(@Body() data: UpdateUsersDto) {
    return this.services.update(data);
  }

  @Delete('remove/:id')
  async remove(@Param('id') id: number) {
    return this.services.remove(+id);
  }
}
