import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { GavetaService } from './gaveta.service';
import { CreateGavetaDTO } from './dto/create-gaveta.dto';
import { UpdateGavetaDTO } from './dto/update-gaveta.dto';

@Controller('/api/v1/gaveta')
export class GavetaController {
  constructor(private readonly service: GavetaService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('pagination')
  findPagination(@Query('page') page: number, @Query('limit') limit: number) {
    return this.service.findPagination(+page, +limit);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.find(+id);
  }

  @Post()
  create(@Body() data: CreateGavetaDTO) {
    return this.service.create(data);
  }

  @Put()
  update(@Body() data: UpdateGavetaDTO) {
    return this.service.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
