-- CreateTable
CREATE TABLE "tipo_documentos" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "criado_por" INTEGER,
    "alterado_por" INTEGER,

    CONSTRAINT "tipo_documentos_pkey" PRIMARY KEY ("id")
);
