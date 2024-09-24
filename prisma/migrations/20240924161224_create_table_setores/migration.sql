-- CreateTable
CREATE TABLE "setores" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "unidade_orcamentaria_id" INTEGER NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "criado_por" INTEGER,
    "alterado_por" INTEGER,

    CONSTRAINT "setores_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "setores" ADD CONSTRAINT "setores_unidade_orcamentaria_id_fkey" FOREIGN KEY ("unidade_orcamentaria_id") REFERENCES "unidades_orcamentaria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
