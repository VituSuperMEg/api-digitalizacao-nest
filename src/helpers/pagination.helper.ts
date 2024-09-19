export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface PaginationResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export async function paginate<T>(
  prismaModel: any,
  paginationParams: PaginationParams = { page: 1, limit: 10 },
  whereClause: any = {},
  orderBy: any = {},
): Promise<PaginationResult<T>> {
  const { page = 1, limit = 10 } = paginationParams;
  const skip = (page - 1) * limit;

  const [data, total] = await Promise.all([
    prismaModel.findMany({
      where: whereClause,
      orderBy: orderBy,
      skip: skip,
      take: limit,
    }),
    prismaModel.count({
      where: whereClause,
    }),
  ]);

  return {
    data,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}
