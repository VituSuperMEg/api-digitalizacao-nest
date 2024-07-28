-- CreateTable
CREATE TABLE "credores" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo_documento" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "logradouro" TEXT,
    "numero" TEXT,
    "cep" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cidade" TEXT,
    "telefone" TEXT NOT NULL,
    "telefone_complementar" TEXT,
    "banco" TEXT NOT NULL,
    "agencia" TEXT NOT NULL,
    "conta" TEXT NOT NULL,
    "observacoes" TEXT,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "credores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "caixas" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "caixas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prateleira" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "prateleira_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contas_extras" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "codigo" INTEGER NOT NULL,
    "exercicio" TEXT NOT NULL,
    "orcamento" TEXT NOT NULL,

    CONSTRAINT "contas_extras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cab_documento" (
    "id" SERIAL NOT NULL,
    "cod_ent" TEXT,
    "cod_cc" TEXT,
    "cod_seq" TEXT,
    "cod_destino" TEXT,
    "cod_setor" TEXT,
    "cod_grupo" TEXT,
    "cod_subgrupo" TEXT,
    "dta_doc" TIMESTAMP(3),
    "path_doc" TEXT,
    "obs_doc" TEXT,
    "ano_doc" TEXT,
    "mes_doc" TEXT,
    "nome_usuario" TEXT,
    "dta_digita" TIMESTAMP(3),
    "qtde_folhas" TEXT,
    "cod_suborgao" TEXT,
    "credor_id" INTEGER NOT NULL,
    "num_processo" TEXT,
    "num_empenho" TEXT,
    "dta_pagamento" TIMESTAMP(3),
    "valor_pagamento" TEXT,
    "digitalizado" TEXT,
    "modalidade_licitacao" TEXT,
    "tipo_licitacao" TEXT,
    "classificacao_economica" TEXT,
    "doc_caixa" TEXT,
    "num_contrato" TEXT,
    "num_contrato_original" TEXT,
    "tipo_contrato" TEXT,
    "modalidade_contrato" TEXT,
    "data_empenho" TIMESTAMP(3),
    "caixa_id" INTEGER,
    "prateleria_id" INTEGER,
    "contas_extra_id" INTEGER,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cab_documento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "centro_custo" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "cod_entidade" TEXT,
    "cod_centro_custo" TEXT,
    "ativo" TEXT,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "centro_custo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gaveta" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "sala_id" INTEGER NOT NULL,
    "armario_id" INTEGER NOT NULL,

    CONSTRAINT "gaveta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "compartimento" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "sala_id" INTEGER NOT NULL,
    "armario_id" INTEGER NOT NULL,
    "gaveta_id" INTEGER NOT NULL,

    CONSTRAINT "compartimento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "credores_cpf_key" ON "credores"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "credores_email_key" ON "credores"("email");

-- AddForeignKey
ALTER TABLE "cab_documento" ADD CONSTRAINT "cab_documento_credor_id_fkey" FOREIGN KEY ("credor_id") REFERENCES "credores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cab_documento" ADD CONSTRAINT "cab_documento_caixa_id_fkey" FOREIGN KEY ("caixa_id") REFERENCES "caixas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cab_documento" ADD CONSTRAINT "cab_documento_prateleria_id_fkey" FOREIGN KEY ("prateleria_id") REFERENCES "prateleira"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cab_documento" ADD CONSTRAINT "cab_documento_contas_extra_id_fkey" FOREIGN KEY ("contas_extra_id") REFERENCES "contas_extras"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gaveta" ADD CONSTRAINT "gaveta_sala_id_fkey" FOREIGN KEY ("sala_id") REFERENCES "salas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gaveta" ADD CONSTRAINT "gaveta_armario_id_fkey" FOREIGN KEY ("armario_id") REFERENCES "armarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compartimento" ADD CONSTRAINT "compartimento_sala_id_fkey" FOREIGN KEY ("sala_id") REFERENCES "salas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compartimento" ADD CONSTRAINT "compartimento_armario_id_fkey" FOREIGN KEY ("armario_id") REFERENCES "armarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compartimento" ADD CONSTRAINT "compartimento_gaveta_id_fkey" FOREIGN KEY ("gaveta_id") REFERENCES "gaveta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
