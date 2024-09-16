import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TiposDocumentosService } from './tipos-documentos.service';
import { CreateTiposDocumentosDTO } from './dto/create-tipos-documentos.dto';

@Controller('/api/v1/tipos-documentos')
export class TiposDocumentosController {
  constructor(private service: TiposDocumentosService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.find(+id);
  }

  @Post()
  create(@Body() data: CreateTiposDocumentosDTO) {
    return this.service.create(data);
  }
  @Put()
  update(@Body() data: CreateTiposDocumentosDTO) {
    return this.service.update(data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(+id);
  }
}
