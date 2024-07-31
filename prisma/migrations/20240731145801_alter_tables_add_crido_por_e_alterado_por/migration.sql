-- AlterTable
ALTER TABLE "ano_mes" ADD COLUMN     "alterado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "criado_por" INTEGER;

-- AlterTable
ALTER TABLE "armarios" ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_por" INTEGER;

-- AlterTable
ALTER TABLE "cab_documento" ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_por" INTEGER;

-- AlterTable
ALTER TABLE "caixas" ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_por" INTEGER;

-- AlterTable
ALTER TABLE "centro_custo" ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_por" INTEGER;

-- AlterTable
ALTER TABLE "compartimento" ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_por" INTEGER;

-- AlterTable
ALTER TABLE "contas_extras" ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_por" INTEGER;

-- AlterTable
ALTER TABLE "credores" ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_por" INTEGER;

-- AlterTable
ALTER TABLE "despesa_categoria_economica" ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_por" INTEGER;

-- AlterTable
ALTER TABLE "destino" ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_por" INTEGER;

-- AlterTable
ALTER TABLE "det_documento" ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_por" INTEGER;

-- AlterTable
ALTER TABLE "entidade" ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_por" INTEGER;

-- AlterTable
ALTER TABLE "estante" ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_por" INTEGER;

-- AlterTable
ALTER TABLE "gaveta" ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_por" INTEGER;

-- AlterTable
ALTER TABLE "grupo" ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_por" INTEGER;

-- AlterTable
ALTER TABLE "orgaos" ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_por" INTEGER;

-- AlterTable
ALTER TABLE "prateleira" ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_por" INTEGER;

-- AlterTable
ALTER TABLE "salas" ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_por" INTEGER;

-- AlterTable
ALTER TABLE "unidades_orcamentaria" ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_por" INTEGER;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "alterado_por" INTEGER,
ADD COLUMN     "criado_por" INTEGER;
