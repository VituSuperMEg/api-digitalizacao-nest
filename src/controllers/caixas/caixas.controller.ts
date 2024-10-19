import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CaixasServices } from './caixas.service';
import { CreateCaixasDTO } from './dto/create-caixas.dto';
import { UpdateCaixasDTO } from './dto/update-caixas.dto';
import { AuthAndDatabaseGuard } from 'src/config/guards/auth.guards';

@Controller('api/v1/caixas')
@UseGuards(AuthAndDatabaseGuard)
export class CaixasController {
  constructor(private readonly services: CaixasServices) {}

  @Get('/page')
  findPage(@Query('page') page: string) {
    const pageNumber = parseInt(page, 10);
    return this.services.getPaginatedItems(pageNumber, 10);
  }

  @Get()
  findAll() {
    return this.services.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return this.services.find(+id);
  }

  @Post()
  create(@Body() data: CreateCaixasDTO) {
    return this.services.create(data);
  }

  @Put()
  update(data: UpdateCaixasDTO) {
    return this.services.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.services.remove(+id);
  }
}
