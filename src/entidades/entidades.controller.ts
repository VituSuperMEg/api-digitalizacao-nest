import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { clientes } from 'src/config/clients';
import { DynamicDatabaseGuard } from 'src/config/guards/database.guard';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Controller('/api/v1/entidades')
export class EntidadesController {
  constructor(private readonly connectionService: PrismaService) {}

  @Get()
  getEstados() {
    return clientes.estados;
  }

  @Get('municipios/:uf')
  getMunicipios(@Param('uf') uf: string) {
    return clientes.municipios[uf];
  }

  @Get('entidades/:ibge')
  getEntidade(@Param('ibge') ibge: string) {
    return clientes.entidades[ibge];
  }

  @UseGuards(DynamicDatabaseGuard)
  @Get('/:cliente')
  async getConectarBanco(@Param('cliente') cliente: string, @Request() req) {
    const prisma = (req as any).dbConnection;

    const result = await prisma.caixas.findMany();
    return result;
  }
}
