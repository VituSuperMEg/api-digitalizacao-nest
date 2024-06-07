import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { clientes } from 'src/config/clients';
import { DatabaseGuard } from 'src/config/guards/conexao.guard';
import { ConnectionService } from 'src/services/conexaoDB';

@Controller('/api/v1/entidades')
export class EntidadesController {
  constructor(private readonly connectionService: ConnectionService) {}
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

  @UseGuards(DatabaseGuard)
  @Get('/:cliente')
  async getConectarBanco(@Param('cliente') cliente: string, @Request() req) {
    const connection = (req as any).dbConnection;
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    const result = await queryRunner.query('SELECT * from caixas');
    await queryRunner.release();

    return result;
  }
}
