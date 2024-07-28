import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { UsersController } from './users.controller';
import { UsersServices } from './users.service';
import { ResponseService } from 'src/services/response-message';

@Module({
  controllers: [UsersController],
  providers: [PrismaService, UsersServices, ResponseService],
})
export class UsersModule {}
