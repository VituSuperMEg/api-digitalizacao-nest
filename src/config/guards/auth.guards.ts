import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { jwtConstants } from 'src/constants/constants';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class AuthAndDatabaseGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    // Extração do token
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException('Token não encontrado.');
    }

    // Verificação do token JWT
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException('Token inválido.');
    }

    // Extração do ID do cliente
    const client_id = request.headers['x-cliente-id'];
    const cliente = String(client_id);
    if (!cliente) {
      console.error('Cliente não fornecido nos parâmetros da solicitação.');
      throw new UnauthorizedException('Cliente ID não fornecido.');
    }

    // Configuração da conexão com o banco de dados
    try {
      await this.prismaService.setConnectionUrl(cliente);
      (request as any).dbConnection = this.prismaService.getPrismaClient();
    } catch (error) {
      console.error(
        `Erro de conexão ao banco de dados para o cliente ${cliente}:`,
        error,
      );
      throw new UnauthorizedException(
        `Erro de conexão ao banco de dados para o cliente ${cliente}`,
      );
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
