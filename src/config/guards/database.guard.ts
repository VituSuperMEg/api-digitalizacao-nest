import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class DynamicDatabaseGuard implements CanActivate {
  constructor(private readonly prismaService: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const clientId = request.headers['x-cliente-id'];
    global.CLIENTE_ID = String(clientId);

    if (!clientId) {
      throw new Error('O CÓDIGO DO CLIENTE NÃO FOI INFORMADO');
    }

    await this.prismaService.setConnectionUrl(clientId);
    (request as any).dbConnection = this.prismaService.getPrismaClient();
    return true;
  }
}
