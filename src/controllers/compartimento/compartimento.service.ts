import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ResponseService } from 'src/services/response-message';

@Injectable()
export class CompartimentoService {
  constructor(
    private readonly db: PrismaService,
    private readonly responseService: ResponseService,
  ) {}

  findAll() {
    return this.db.compartimento.findMany();
  }

  find(id: number) {
    return this.db.compartimento.findFirst({
      where: { id: id },
    });
  }
}
