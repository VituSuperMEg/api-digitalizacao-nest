import { Inject, Injectable } from '@nestjs/common';
import { Caixas } from 'src/models/caixas.entity';
import { Repository, Connection } from 'typeorm';

@Injectable()
export class CaixasService {
  constructor(
    @Inject('CAIXAS_REPOSITORY') private caixasRespository: Repository<Caixas>,
  ) {}

  setConnection(connection: Connection) {
    this.caixasRespository = connection.getRepository(Caixas);
  }

  findAll() {
    return this.caixasRespository.find();
  }
}
