import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ContasExtrasService } from './contas_extras.service';
import { CreateContaDTO } from './dto/create-conta.dto';
import { UpdateContaDTO } from './dto/update-conta.dto';
import { Session } from 'src/customs/decorator/session.decorator';

@Controller('api/v1/conta-extra')
export class ContasExtrasController {
  constructor(private readonly service: ContasExtrasService) {}

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
  create(@Body() data: CreateContaDTO) {
    return this.service.create(data);
  }

  @Put()
  @Session()
  update(@Body() data: UpdateContaDTO) {
    return this.service.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
