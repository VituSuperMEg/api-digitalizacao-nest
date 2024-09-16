/*
  Warnings:

  - You are about to drop the column `cnpj` on the `unidades_orcamentaria` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cpf]` on the table `unidades_orcamentaria` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cod_orgao` to the `unidades_orcamentaria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cod_unidade_orcamentaria` to the `unidades_orcamentaria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `unidades_orcamentaria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responsavel` to the `unidades_orcamentaria` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "unidades_orcamentaria_cnpj_key";

-- AlterTable
ALTER TABLE "unidades_orcamentaria" DROP COLUMN "cnpj",
ADD COLUMN     "cod_orgao" TEXT NOT NULL,
ADD COLUMN     "cod_unidade_orcamentaria" TEXT NOT NULL,
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "responsavel" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "unidades_orcamentaria_cpf_key" ON "unidades_orcamentaria"("cpf");
