import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cab_documento')
export class CabDocumento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 6, type: 'smallint', default: null })
  cod_ent: string;

  @Column({ length: 6, type: 'smallint', default: null })
  cod_cc: string;

  @Column({ length: 20, type: 'bigint', default: null })
  cod_doc: number;

  @Column({ length: 9, type: 'mediumint', default: null })
  cod_seq: number;

  @Column({ length: 4, type: 'smallint', default: null })
  cod_destino: string;

  @Column({ length: 6, type: 'smallint', default: null })
  cod_setor: string;

  @Column({ length: 4, type: 'tinyint', default: null })
  cod_grupo: string;

  @Column({ length: 4, type: 'tinyint', default: null })
  cod_subgrupo: string;

  @Column({ type: 'timestamp', default: null })
  dta_doc: Date;

  @Column({ length: 73, type: 'varchar', default: null })
  path_doc: string;

  @Column({ length: 255, type: 'varchar', default: null })
  obs_doc: string;

  @Column({ length: 6, type: 'smallint', default: null })
  ano_doc: string;

  @Column({ length: 4, type: 'smallint', default: null })
  mes_doc: string;

  @Column({ length: 255, type: 'varchar', default: null })
  nome_usuario: string;

  @Column({ type: 'timestamp', default: null })
  dta_digita: Date;

  @Column({ length: 3, type: 'varchar', default: null })
  qtde_folhas: string;

  @Column({ length: 4, type: 'varchar', default: null })
  cod_suborgao: string;

  @Column({ length: 1, type: 'int', default: null })
  credor_id: number;

  @Column({ length: 8, type: 'varchar', default: null })
  num_processo: string;

  @Column({ length: 8, type: 'varchar', default: null })
  num_empenho: string;

  @Column({ type: 'timestamp', default: null })
  dta_pagamento: Date;

  @Column({ length: 10, type: 'varchar', default: null })
  valor_pagamento: string;

  @Column({ length: 255, type: 'varchar', default: null })
  digitalizado: string;

  @Column({ length: 255, type: 'varchar', default: null })
  modalidade_licitacao: string;

  @Column({ length: 255, type: 'varchar', default: null })
  tipo_licitacao: string;

  @Column({ length: 4, type: 'tinyint', default: null })
  classificacao_economica: string;

  @Column({ length: 8, type: 'varchar', default: null })
  doc_caixa: string;

  @Column({ length: 255, type: 'varchar', default: null })
  num_contrato: string;

  @Column({ length: 255, type: 'varchar', default: null })
  num_contrato_original: string;

  @Column({ length: 255, type: 'varchar', default: null })
  tipo_contrato: string;

  @Column({ length: 255, type: 'varchar', default: null })
  modalidade_contrato: string;

  @Column({ length: 1, type: 'number', default: null })
  contra_extra_id: string;

  @Column({ type: 'timestamp', default: null })
  data_empenho: Date;

  @Column({ length: 1, type: 'number', default: null })
  caixa_id: number;

  @Column({ length: 1, type: 'number', default: null })
  prateleira_id: number;
}
