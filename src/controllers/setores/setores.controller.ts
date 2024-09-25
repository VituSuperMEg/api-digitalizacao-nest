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
import { APIV1 } from 'src/constants/constants';
import { SetoresServices } from './setores.service';
import { CreateSetoresDTO } from './dto/create-setores.dto';
import { UpdateSetoresDto } from './dto/update-setores.dto';

@Controller(APIV1 + 'setores')
export class SetoresController {
  constructor(private readonly service: SetoresServices) {}

  @Get()
  findAll() {
    return this.service.indAll();
  }

  @Get('/page')
  findPage(@Query('page') page: string) {
    const pageNumber = parseInt(page, 10);
    return this.service.getPaginatedItems(pageNumber, 10);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.find(+id);
  }

  @Post()
  create(@Body() data: CreateSetoresDTO) {
    return this.service.create(data);
  }

  @Put()
  update(@Body() data: UpdateSetoresDto) {
    return this.service.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.delete(+id);
  }
}
