import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';

import { AuthAndDatabaseGuard } from 'src/config/guards/auth.guards';
import { EstantesServices } from './estantes.service';
import { CreateEstantesDTO } from './dto/create-estante.dto';
import { UpdateEstantesDTO } from './dto/update-estante.dto';

@Controller('api/v1/estantes')
@UseGuards(AuthAndDatabaseGuard)
export class EstantesController {
  constructor(private readonly services: EstantesServices) {}

  @Get('/page')
  findPage(@Query('page') page: string) {
    const pageNumber = parseInt(page, 10);
    return this.services.getPaginatedItems(pageNumber, 10);
  }

  @Get()
  findAll() {
    return this.services.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return this.services.find(+id);
  }

  @Post()
  create(@Body() data: CreateEstantesDTO) {
    return this.services.create(data);
  }

  @Put()
  update(data: UpdateEstantesDTO) {
    return this.services.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.services.remove(+id);
  }
}
