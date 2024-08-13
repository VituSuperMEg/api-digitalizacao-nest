import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PrateleiraService } from './prateleira.service';
import { CreatePrateleiraDTO } from './dto/create-prateleira.dto';
import { UpdatePrateleiraDTO } from './dto/update-prateleira.dto';
import { Session } from 'src/customs/decorator/session.decorator';

@Controller('api/v1/prateleira')
export class PrateleiraController {
  constructor(private readonly service: PrateleiraService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.find(+id);
  }

  @Post()
  @Session()
  create(@Body() data: CreatePrateleiraDTO) {
    return this.service.create(data);
  }

  @Put()
  @Session()
  update(@Body() data: UpdatePrateleiraDTO) {
    return this.service.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
