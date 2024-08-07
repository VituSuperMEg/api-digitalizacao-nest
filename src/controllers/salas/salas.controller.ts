import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { SalasServices } from './salas.service';
import { AuthAndDatabaseGuard } from 'src/config/guards/auth.guards';
import { UpdateSalasDTO } from './dto/update-salas.dto';
import { CreateSalasDTO } from './dto/create-salas.dto';
import { Session } from 'src/customs/decorator/session.decorator';

@Controller('api/v1/salas')
@UseGuards(AuthAndDatabaseGuard)
export class SalasController {
  constructor(private readonly service: SalasServices) {}

  @Get()
  @Session()
  findAll() {
    return this.service.findAll();
  }
  @Get(':id')
  find(@Param('id') id: number) {
    return this.service.find(+id);
  }
  @Post()
  @Session()
  create(@Body() data: CreateSalasDTO) {
    return this.service.create(data);
  }
  @Put()
  @Session()
  update(@Body() data: UpdateSalasDTO) {
    return this.service.update(data);
  }
  @Delete('remove/:id')
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
