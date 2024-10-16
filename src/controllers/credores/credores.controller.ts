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
import { AuthAndDatabaseGuard } from 'src/config/guards/auth.guards';
import { CredoresService } from './credores.service';
import { CreateCredorDTO } from './dto/create-credor.dto';
import { Session } from 'src/customs/decorator/session.decorator';
import { UpdateCredorDTO } from './dto/update-credor.dto';

@Controller('api/v1/credores')
@UseGuards(AuthAndDatabaseGuard)
export class CredoresController {
  constructor(private service: CredoresService) {}

  @Get('/page')
  findPage(@Query('page') page: string) {
    const pageNumber = parseInt(page, 10);
    return this.service.getPaginatedItems(pageNumber, 10);
  }

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
  create(@Body() data: CreateCredorDTO) {
    return this.service.create(data);
  }

  @Put()
  @Session()
  update(@Body() data: UpdateCredorDTO) {
    return this.service.update(data);
  }

  @Delete(':id')
  @Session()
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
