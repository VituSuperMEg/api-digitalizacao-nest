/*
  Warnings:

  - You are about to drop the column `banco` on the `credores` table. All the data in the column will be lost.
  - Added the required column `banco_id` to the `credores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "credores" DROP COLUMN "banco",
ADD COLUMN     "banco_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "bancos" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "codigo" INTEGER NOT NULL,

    CONSTRAINT "bancos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "credores" ADD CONSTRAINT "credores_banco_id_fkey" FOREIGN KEY ("banco_id") REFERENCES "bancos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
