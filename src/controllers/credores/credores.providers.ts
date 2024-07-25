import { Credores } from 'src/models/credores.entity';
import { DataSource } from 'typeorm';

export const credoresProviders = [
  {
    provide: 'CREDORES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Credores),
    inject: ['DATA_SOURCE'],
  },
];
