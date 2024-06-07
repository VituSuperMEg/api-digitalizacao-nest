import { Caixas } from 'src/models/caixas.entity';
import { DataSource } from 'typeorm';

export const caixasProviders = [
  {
    provide: 'CAIXAS_REPOSITORY',
    useFactory: (dataSouce: DataSource) => dataSouce.getRepository(Caixas),
    inject: ['DATA_SOURCE'],
  },
];
