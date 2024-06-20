import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CaixasService } from './caixas.service';
import { AuthAndDatabaseGuard } from 'src/config/guards/auth.guards';
import { CreateCaixasDTO } from './dto/create-caixas.dto';
import { Response } from 'express';
import { UpdateCaixasDTO } from './dto/update-caixas.dto';

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
