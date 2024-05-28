import { Controller, Get, Param } from '@nestjs/common';
import { clientes, configuracoes } from 'src/config/clients';

@Controller('/api/v1/entidades')
export class EntidadesController {
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

  // Estabelecer Conexão com o banco pelo codigo do ibge
  @Get('/:cliente')
  getConectarBanco(@Param('cliente') cliente: string) {
    return configuracoes.database[cliente];
  }
}
