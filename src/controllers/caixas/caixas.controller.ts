import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { CaixasService } from './caixas.service';
import { AuthAndDatabaseGuard } from 'src/config/guards/auth.guards';

@Controller('/api/v1/caixas')
@UseGuards(AuthAndDatabaseGuard)
export class CaixasController {
  constructor(private caixasServices: CaixasService) {}

  @Get()
  findAll(@Req() request: Request) {
    const connection = (request as any).dbConnection;
    this.caixasServices.setConnection(connection);
    return this.caixasServices.findAll();
  }
}
