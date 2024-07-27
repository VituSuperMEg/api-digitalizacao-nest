import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [
    {
      provide: PrismaService,
      useFactory: async (url: string) => {
        const prismaService = new PrismaService();
        await prismaService.setConnectionUrl(url);
        return prismaService;
      },
      inject: ['DATABASE_URL'],
    },
  ],
  exports: [PrismaService],
})
export class PrismaModul {}
