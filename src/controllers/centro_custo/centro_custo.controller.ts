import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CentroCustoService } from './centro_custo.service';
import { CreateCentroCustoDTO } from './dto/create-centro-custo.dto';
import { UpdateCentroCusto } from './dto/update-centro-custo.dto';

@Controller('api/v1/centro-custo')
export class CentroCustoController {
  constructor(private readonly service: CentroCustoService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.find(+id);
  }
  @Post()
  create(@Body() data: CreateCentroCustoDTO) {
    return this.service.create(data);
  }
  @Put()
  update(@Body() data: UpdateCentroCusto) {
    return this.service.update(data);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
