import { Controller, Get, Query } from '@nestjs/common';
import { BancosServices } from './bancos.service';

@Controller('api/v1/bancos')
export class BancosController {
  constructor(private readonly service: BancosServices) {}

  @Get('/find')
  find(@Query('id') id: number) {
    return this.service.find(+id);
  }

  @Get('/options')
  listOptions(@Query('descricao') descricao: string) {
    return this.service.listOptions(descricao);
  }
}
