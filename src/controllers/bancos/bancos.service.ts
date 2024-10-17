import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class BancosServices {
  constructor(private readonly db: PrismaService) {}

  find(id: number) {
    return this.db.bancos.findFirst({
      where: { id: id },
    });
  }

  listOptions(descricao: string) {
    return this.db.bancos.findMany({
      where: { descricao: { contains: descricao, mode: 'insensitive' } },
      take: 10,
    });
  }
}
