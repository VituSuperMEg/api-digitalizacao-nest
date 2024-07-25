import { Inject, Injectable } from '@nestjs/common';
import { Credores } from 'src/models/credores.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CredoresServices {
  constructor(
    @Inject('CREDORES_REPOSITORY') private model: Repository<Credores>,
  ) {}

  findAll(): Promise<Credores[]> {
    return this.model.find();
  }

}
