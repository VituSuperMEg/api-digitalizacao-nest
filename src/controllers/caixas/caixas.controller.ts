import {
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CaixasService } from './caixas.service';
import { AuthAndDatabaseGuard } from 'src/config/guards/auth.guards';
import { CreateCaixasDTO } from './dto/create-caixas.dto';
import { Response } from 'express';
import { UpdateCaixasDTO } from './dto/update-caixas.dto';
import { Connection, Repository } from 'typeorm';
import { Caixas } from 'src/models/caixas.entity';

@Controller('/api/v1/caixas')
@UseGuards(AuthAndDatabaseGuard)
export class CaixasController {
  constructor(
    private caixasServices: CaixasService,
    @Inject('CAIXAS_REPOSITORY') private caixasRespository: Repository<Caixas>,
  ) {}

  setConnection(connection: Connection) {
    this.caixasRespository = connection.getRepository(Caixas);
  }
  @Get()
  findAll() {
    return this.caixasServices.findAll();
  }

  @Get(':id')
  find(@Param() id: number) {
    return this.caixasServices.find(+id);
  }

  @Post()
  create(data: CreateCaixasDTO, res: Response) {
    const rs = this.caixasServices.create(data);
    if (rs) {
      res.status(201).json([
        {
          message: 'Criando com Sucesso',
        },
      ]);
    }
  }
  @Put()
  update(data: UpdateCaixasDTO, res: Response) {
    const rs = this.caixasServices.update(data);
    if (rs) {
      res.status(201).json([
        {
          message: 'Alterado com Sucesso',
        },
      ]);
    }
  }

  @Delete(':id')
  delete(@Param() id: number) {
    return this.caixasServices.delete(+id);
  }
}
