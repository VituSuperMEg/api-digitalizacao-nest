import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { configuracoes } from 'src/config/clients';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private prisma: PrismaClient;

  constructor() {
    super();
    this.prisma = this; // Inicializa a instância interna com o PrismaClient padrão
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async setConnectionUrl(clientId: string) {
    // Busca as configurações do cliente
    const cliente = configuracoes.database[+clientId] as {
      host: string;
      port: string;
      username: string;
      database: string;
      password: string;
    };

    // Monta a URL de conexão
    const url = `postgresql://${cliente.username}:${cliente.password}@${cliente.host}:${cliente.port}/${cliente.database}?schema=public`;
  
    // Desconecta a conexão anterior
    await this.prisma.$disconnect();

    // Cria uma nova instância do PrismaClient com a nova URL
    this.prisma = new PrismaClient({
      datasources: {
        db: {
          url,
        },
      },
    });

    // Conecta com a nova URL
    await this.prisma.$connect();
  }

  getPrismaClient() {
    return this.prisma;
  }
}
