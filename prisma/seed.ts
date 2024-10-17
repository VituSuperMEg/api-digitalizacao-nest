import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (1, 'BANCO DO BRASIL S.A.', '001')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (2, 'BANCO SANTANDER (BRASIL) S.A.', '033')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (3, 'CAIXA ECONÔMICA FEDERAL', '104')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (4, 'BANCO BRADESCO S.A.', '237')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (5, 'ITAÚ UNIBANCO S.A.', '341')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (6, 'NU PAGAMENTOS S.A.', '260')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (7, 'BANCO C6 S.A.', '336')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (8, 'BANCO INTER S.A.', '077')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (9, 'BANCO SAFRA S.A.', '422')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (10, 'BANCO BTG PACTUAL S.A.', '208')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (11, 'BANCO VOTORANTIM S.A.', '655')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (12, 'BANCO ORIGINAL S.A.', '212')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (13, 'BANCO MERCANTIL DO BRASIL S.A.', '389')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (14, 'BANCO DO NORDESTE DO BRASIL S.A.', '004')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (15, 'BANCO DA AMAZÔNIA S.A.', '003')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (16, 'BANCO RENDIMENTO S.A.', '633')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (17, 'BANCO PAN S.A.', '623')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (18, 'BANCO AGIBANK S.A.', '121')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (19, 'BANCO BMG S.A.', '318')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (20, 'BANCO ABC BRASIL S.A.', '246')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (21, 'BANCO PINE S.A.', '643')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (22, 'BANCO BRB - BANCO DE BRASILIA S.A.', '070')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (23, 'CITIBANK N.A.', '745')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (24, 'BANCO DAYCOVAL S.A.', '707')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (25, 'BANCO XP S.A.', '348')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (26, 'BANCO MODAL S.A.', '746')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (27, 'BANCO SOCIETE GENERALE BRASIL', '366')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (28, 'BANCO CITIBANK S.A.', '477')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (29, 'BANCO J.P. MORGAN S.A.', '376')`;
  await prisma.$executeRaw`INSERT INTO bancos (id, descricao, codigo) VALUES (30, 'BANCO CREDIT SUISSE (BRASIL) S.A.', '505')`;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
