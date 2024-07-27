import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class UsersServices {
  constructor(private readonly db: PrismaService) {}

  findAll() {
    return this.db.users.findMany();
  }

  find(id: number) {
    return this.db.users.findFirst({
      where: { id: id },
    });
  }
}
