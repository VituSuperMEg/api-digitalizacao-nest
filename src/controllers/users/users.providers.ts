import { Users } from 'src/models/users.entity';
import { DataSource } from 'typeorm';

export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (dataSouce: DataSource) => dataSouce.getRepository(Users),
    inject: ['DATA_SOURCE'],
  },
];
