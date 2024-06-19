import { Inject, Injectable } from '@nestjs/common';
import { Caixas } from 'src/models/caixas.entity';
import { Repository, Connection } from 'typeorm';
import { CreateCaixasDTO } from './dto/create-caixas.dto';

@Injectable()
export class CaixasService {
  constructor(
    @Inject('CAIXAS_REPOSITORY') private caixasRespository: Repository<Caixas>,
  ) {}

  setConnection(connection: Connection) {
    this.caixasRespository = connection.getRepository(Caixas);
  }

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

  async update(id: number, data: CreateCaixasDTO) {
    const property = await this.caixasRespository.findOne({
      where: { id },
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
