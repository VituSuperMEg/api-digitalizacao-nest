import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

type PaginateType = {
  model: any;
  page: number;
  limit: number;
  options?: any;
};
@Injectable()
export class PaginationService {
  constructor(private readonly prisma: PrismaService) {}

  async paginate(
    model: any,
    page: number = 1,
    limit: number = 10,
    options?: any,
  ) {
    const offset = (page - 1) * limit;

    const [data, totalItems] = await Promise.all([
      model.findMany({
        skip: offset,
        take: limit,
        ...options,
      }),
      model.count(options),
    ]);

    return {
      data,
      currentPage: page,
      totalPages: Math.ceil(totalItems / limit),
      totalItems,
    };
  }
}
