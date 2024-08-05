import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrgaosService } from './orgaos.service';
import { CreateOrgaosDTO } from './dto/create-orgao.dto';
import { Session } from 'src/customs/decorator/session.decorator';

@Controller('api/v1/orgaos')
export class OrgaosController {
  constructor(private readonly orgaoService: OrgaosService) {}

  @Get()
  findAll() {
    return this.orgaoService.findAll();
  }

  @Post()
  @Session()
  create(@Body() data: CreateOrgaosDTO) {
    return this.orgaoService.create(data);
  }
}
