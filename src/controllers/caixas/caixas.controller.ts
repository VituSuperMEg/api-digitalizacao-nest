import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CaixasServices } from './caixas.service';
import { CreateCaixasDTO } from './dto/create-caixas.dto';
import { UpdateCaixasDTO } from './dto/update-caixas.dto';

@Controller('api/v1/caixas')
export class CaixasController {
  constructor(private readonly services: CaixasServices) {}

  @Get()
  findAll() {
    return this.services.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return this.services.find(+id);
  }

  @Post()
  create(@Body() data: CreateCaixasDTO) {
    return this.services.create(data);
  }

  @Put()
  update(data: UpdateCaixasDTO) {
    return this.services.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.services.remove(+id);
  }
}
