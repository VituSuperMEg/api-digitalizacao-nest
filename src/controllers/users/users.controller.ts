import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateUsersDTO } from './dto/create-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}
}
