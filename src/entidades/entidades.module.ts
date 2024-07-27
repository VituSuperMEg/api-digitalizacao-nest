import { Module } from '@nestjs/common';
import { EntidadesController } from './entidades.controller';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [EntidadesController],
  providers: [PrismaService],
})
export class EntidadesModule {}
