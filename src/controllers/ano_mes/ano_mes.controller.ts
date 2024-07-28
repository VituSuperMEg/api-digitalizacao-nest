import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AnoMesService } from './ano_mes.service';
import { CreateAnoMesDTO } from './dto/create.ano_mes.dto';

@Controller('api/v1/ano-mes')
export class AnoMesController {
  constructor(private readonly service: AnoMesService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return this.service.find(+id);
  }

  @Post()
  create(@Body() data: CreateAnoMesDTO) {
    return this.service.create(data);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
