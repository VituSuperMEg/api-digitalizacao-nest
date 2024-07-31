import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthAndDatabaseGuard } from 'src/config/guards/auth.guards';
import { CredoresService } from './credores.service';
import { CreateCredorDTO } from './dto/create-credor.dto';
import { Session } from 'src/customs/decorator/session.decorator';

@Controller('api/v1/credores')
@UseGuards(AuthAndDatabaseGuard)
export class CredoresController {
  constructor(private service: CredoresService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return this.service.find(+id);
  }

  @Post()
  @Session()
  create(@Body() data: CreateCredorDTO) {
    return this.service.create(data);
  }
}
