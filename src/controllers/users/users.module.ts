import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { UsersController } from './users.controller';
import { UsersServices } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [PrismaService, UsersServices],
})
export class UsersModule {}
