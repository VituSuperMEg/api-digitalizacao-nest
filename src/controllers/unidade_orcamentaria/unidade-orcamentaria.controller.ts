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
import { UnidadeOrcamentariaService } from './unidade-orcamentaria.service';
import { Session } from 'src/customs/decorator/session.decorator';
import { CreateUnidadeOrcamentariaDTO } from './dto/create-unidade-orcamentaria.dto';
import { UpdateUnidadeOrcamentariaDTO } from './dto/update-unidade-orcamentaria.dto';

@Controller('/api/v1/unidade-orcamentaria')
export class UnidadeOrcamentariaController {
  constructor(private readonly service: UnidadeOrcamentariaService) {}

  @Get('/page')
  findPage(@Query('page') page: string) {
    const pageNumber = parseInt(page, 10);
    return this.service.getPaginatedItems(pageNumber, 10);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('/find')
  find(@Query('id') id: number) {
    return this.service.find(+id);
  }

  @Get('/options')
  listOptions(@Query('descricao') descricao: string) {
    return this.service.listOptions(descricao);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.find(+id);
  }

  @Post()
  @Session()
  create(@Body() data: CreateUnidadeOrcamentariaDTO) {
    return this.service.create(data);
  }

  @Put()
  update(@Body() data: UpdateUnidadeOrcamentariaDTO) {
    return this.service.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
