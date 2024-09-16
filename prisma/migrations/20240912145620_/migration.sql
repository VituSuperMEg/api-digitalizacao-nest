/*
  Warnings:

  - You are about to drop the column `cpf` on the `unidades_orcamentaria` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cnpj]` on the table `unidades_orcamentaria` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cnpj` to the `unidades_orcamentaria` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "unidades_orcamentaria_cpf_key";

-- AlterTable
ALTER TABLE "unidades_orcamentaria" DROP COLUMN "cpf",
ADD COLUMN     "cnpj" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "unidades_orcamentaria_cnpj_key" ON "unidades_orcamentaria"("cnpj");
