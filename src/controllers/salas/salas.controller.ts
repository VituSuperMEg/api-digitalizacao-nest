import { Controller, Get, UseGuards } from '@nestjs/common';
import { SalasServices } from './salas.service';
import { AuthAndDatabaseGuard } from 'src/config/guards/auth.guards';

@Controller('api/v1/salas')
@UseGuards(AuthAndDatabaseGuard)
export class SalasController {
  constructor(private readonly service: SalasServices) {}

  @Get()
  findAll() {}
}
