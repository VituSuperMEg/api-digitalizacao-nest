import { PrismaClient } from '@prisma/client';
import { ResponseService } from '../response-message';

type ps = keyof Omit<
  PrismaClient,
  '$connect' | '$disconnect' | '$use' | '$on' | '$transaction' | '$extends'
>;
const prisma = new PrismaClient();
const responseService = new ResponseService();
export const Already = async (
  db: ps,
  id: number,
  title = 'Não existe nenhum registro com este código!',
) => {
  const model = prisma[db] as any;
  const record = await model.findUnique({
    where: { id },
  });
  if (!record || record === null) {
    return responseService.error(title);
  }
};
