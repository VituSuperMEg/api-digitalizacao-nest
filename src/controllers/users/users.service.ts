import { Inject, Injectable } from '@nestjs/common';
import { Users } from 'src/models/users.entity';
import { Repository } from 'typeorm';
import { CreateUsersDTO } from './dto/create-users.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private usersRepository: Repository<Users>,
  ) {}

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  find(id: number): Promise<Users> {
    return this.usersRepository.findOne({
      where: { id },
    });
  }
  findLogin(login: string): Promise<Users> {
    return this.usersRepository.findOne({
      where: { login },
    });
  }
  create(data: CreateUsersDTO) {}
}
