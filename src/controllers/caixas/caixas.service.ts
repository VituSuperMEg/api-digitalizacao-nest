import { Inject, Injectable } from '@nestjs/common';
import { Caixas } from 'src/models/caixas.entity';
import { Repository } from 'typeorm';
import { CreateCaixasDTO } from './dto/create-caixas.dto';
import { UpdateCaixasDTO } from './dto/update-caixas.dto';

@Injectable()
export class CaixasService {
  constructor(
    @Inject('CAIXAS_REPOSITORY') private caixasRespository: Repository<Caixas>,
  ) {}

  findAll(): Promise<Caixas[]> {
    return this.caixasRespository.find();
  }

  find(id: number): Promise<Caixas> {
    return this.caixasRespository.findOne({
      where: { id },
    });
  }

  create(data: CreateCaixasDTO) {
    return this.caixasRespository.create({
      descricao: data.descricao.toUpperCase(),
    });
  }

  async update(data: UpdateCaixasDTO) {
    const property = await this.caixasRespository.findOne({
      where: { id: data.id },
    });

    return this.caixasRespository.save({
      ...property,
      ...data,
    });
  }

  async delete(id: number) {
    return this.caixasRespository.delete(id);
  }
}
