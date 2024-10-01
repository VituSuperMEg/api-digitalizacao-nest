import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CompartimentoService } from './compartimento.service';
import { CreateCompartimentoDTO } from './dto/create-compartimento.dto';
import { UpdateCompartimentoDTO } from './dto/update-compartimento.dto';

@Controller('/api/v1/compartimento')
export class CompartimentoController {
  constructor(private readonly service: CompartimentoService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.find(+id);
  }

  @Post()
  create(@Body() data: CreateCompartimentoDTO) {
    return this.service.create(data);
  }

  @Put()
  update(@Body() data: UpdateCompartimentoDTO) {
    return this.service.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
