-- CreateTable
CREATE TABLE "salas" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "salas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "armarios" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "salas_id" INTEGER NOT NULL,

    CONSTRAINT "armarios_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "armarios" ADD CONSTRAINT "armarios_salas_id_fkey" FOREIGN KEY ("salas_id") REFERENCES "salas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
