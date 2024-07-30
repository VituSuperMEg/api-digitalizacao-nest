-- CreateTable
CREATE TABLE "orgaos" (
    "id" SERIAL NOT NULL,
    "sigla" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "responsavel" TEXT NOT NULL,
    "num_expediente" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orgaos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unidades_orcamentaria" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "ativo" TEXT NOT NULL DEFAULT 'S',
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "unidades_orcamentaria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "despesa_categoria_economica" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "cod_municipio" TEXT NOT NULL,
    "exercicio" TEXT NOT NULL,
    "cod_orgao" INTEGER NOT NULL,
    "cod_unid_orc" INTEGER NOT NULL,
    "codigo_elmento" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "despesa_categoria_economica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entidade" (
    "id" SERIAL NOT NULL,
    "cod_ent" INTEGER NOT NULL,
    "sigla" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "razao_social" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cod_ibge" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "telefone_complementar" TEXT,
    "fax" TEXT,
    "responsavel" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "site" TEXT,
    "perc_pmss" TEXT NOT NULL,
    "inst_prev" TEXT NOT NULL,
    "fgts" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "entidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "destino" (
    "id" SERIAL NOT NULL,
    "cod_ent" INTEGER NOT NULL,
    "cod_cc" INTEGER NOT NULL,
    "cod_und_ormt" INTEGER NOT NULL,
    "desc_destino" TEXT NOT NULL,
    "responsavel_destino" TEXT NOT NULL,
    "cod_orgao" INTEGER NOT NULL,
    "cd_unid" TEXT NOT NULL,
    "exercicio" TEXT NOT NULL,
    "ativo" TEXT NOT NULL DEFAULT 'S',
    "cpf_gestor" TEXT NOT NULL,
    "nome_gestor" TEXT NOT NULL,
    "forma_ingresso" TEXT NOT NULL,
    "tipo_relacao" TEXT NOT NULL,
    "numero_expediente" TEXT NOT NULL,
    "data_inicio_gestao" TIMESTAMP(3) NOT NULL,
    "data_fim_gestao" TIMESTAMP(3) NOT NULL,
    "competencia" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "destino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "det_documento" (
    "id" SERIAL NOT NULL,
    "cod_doc" TEXT NOT NULL,
    "path_doc" TEXT NOT NULL,
    "qtde_paginas" TEXT NOT NULL,
    "credor_id" INTEGER NOT NULL,
    "tipo_documento" TEXT NOT NULL,
    "data_digitalizacao" TIMESTAMP(3) NOT NULL,
    "nome_arquivo" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "det_documento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estante" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "estante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grupo" (
    "id" SERIAL NOT NULL,
    "cod_grupo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "loteval_grupo" TEXT NOT NULL,
    "patrimonio" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "grupo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "orgaos_cpf_key" ON "orgaos"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "unidades_orcamentaria_cnpj_key" ON "unidades_orcamentaria"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "entidade_cnpj_key" ON "entidade"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "entidade_email_key" ON "entidade"("email");

-- AddForeignKey
ALTER TABLE "despesa_categoria_economica" ADD CONSTRAINT "despesa_categoria_economica_cod_orgao_fkey" FOREIGN KEY ("cod_orgao") REFERENCES "orgaos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "despesa_categoria_economica" ADD CONSTRAINT "despesa_categoria_economica_cod_unid_orc_fkey" FOREIGN KEY ("cod_unid_orc") REFERENCES "unidades_orcamentaria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "destino" ADD CONSTRAINT "destino_cod_ent_fkey" FOREIGN KEY ("cod_ent") REFERENCES "entidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "destino" ADD CONSTRAINT "destino_cod_cc_fkey" FOREIGN KEY ("cod_cc") REFERENCES "centro_custo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "destino" ADD CONSTRAINT "destino_cod_und_ormt_fkey" FOREIGN KEY ("cod_und_ormt") REFERENCES "unidades_orcamentaria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "destino" ADD CONSTRAINT "destino_cod_orgao_fkey" FOREIGN KEY ("cod_orgao") REFERENCES "orgaos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "det_documento" ADD CONSTRAINT "det_documento_credor_id_fkey" FOREIGN KEY ("credor_id") REFERENCES "credores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
