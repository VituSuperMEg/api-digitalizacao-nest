import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrgaosService } from './orgaos.service';
import { CreateOrgaosDTO } from './dto/create-orgao.dto';
import { Session } from 'src/customs/decorator/session.decorator';
import { UpdateOrgaosDTO } from './dto/update-orgao.dto';
import { ValidationPipe } from 'src/pipes/validation.pipe';

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

  @Put()
  @Session()
  update(@Body(new ValidationPipe()) data: UpdateOrgaosDTO) {
    return this.orgaoService.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.orgaoService.remove(+id);
  }
}
