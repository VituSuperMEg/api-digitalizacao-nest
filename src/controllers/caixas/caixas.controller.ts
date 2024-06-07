import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { CaixasService } from './caixas.service';
import { DatabaseGuard } from 'src/config/guards/conexao.guard';

@Controller('/api/v1/caixas')
@UseGuards(DatabaseGuard)
export class CaixasController {
  constructor(private caixasServices: CaixasService) {}

  @Get()
  findAll(@Req() request: Request) {
    const connection = (request as any).dbConnection;
    this.caixasServices.setConnection(connection);
    return this.caixasServices.findAll();
  }
}
