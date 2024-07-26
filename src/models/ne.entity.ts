import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ne')
export class Ne {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  tipo: string;

  @Column({ type: 'smallint', nullable: true })
  codigo_municipio: number;

  @Column({ type: 'mediumint', nullable: true })
  exercicio: number;

  @Column({ type: 'tinyint', nullable: true })
  cd_orgao: number;

  @Column({ type: 'tinyint', nullable: true })
  cd_unid: number;

  @Column({ type: 'varchar', length: 19, nullable: true })
  data_emissao_empenho: string;

  @Column({ type: 'int', nullable: true })
  num_empenho: number;

  @Column({ type: 'mediumint', nullable: true })
  data_referencia: number;

  @Column({ type: 'tinyint', nullable: true })
  codigo_funcao: number;

  @Column({ type: 'smallint', nullable: true })
  codigo_subfuncao: number;

  @Column({ type: 'smallint', nullable: true })
  codigo_programa: number;

  @Column({ type: 'tinyint', nullable: true })
  codigo_atividade_projeto: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  num_projeto_atividade: string;

  @Column({ type: 'smallint', nullable: true })
  num_subprojeto: number;

  @Column({ type: 'int', nullable: true })
  codigo_elemento_despesa: number;

  @Column({ type: 'tinyint', nullable: true })
  codigo_grupo_fonte: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  codigo_espe_fonte: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  codigo_ident_trans_mun: string;

  @Column({ type: 'varchar', length: 1, nullable: true })
  modalidade_nota_emp: string;

  @Column({ type: 'text', nullable: true })
  historico_nota_empenho: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  valor_saldo_anterior: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  valor_empenhado: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  valor_atual_saldo: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  cpf_gestor: string;

  @Column({ type: 'varchar', length: 13, nullable: true })
  num_contrato: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  data_contrato_firmado: string;

  @Column({ type: 'varchar', length: 1, nullable: true })
  numero_processo_adm: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  data_atuacao_processo: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  tipo_processo: string;

  @Column({ type: 'tinyint', nullable: true })
  tipo_documento_credor: number;

  @Column({ type: 'bigint', nullable: true })
  num_documento_credor: string;

  @Column({ type: 'varchar', length: 60, nullable: true })
  nome_credor: string;

  @Column({ type: 'varchar', length: 69, nullable: true })
  endereco_credor: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  num_telefone: string;

  @Column({ type: 'int', nullable: true })
  num_cep: number;

  @Column({ type: 'varchar', length: 23, nullable: true })
  nome_municipio: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  uf_municipio: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  data_inicio_obra: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  tipo_servico: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  num_obra: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  cpf_ordenador: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  data_instrumento_juridico: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  tipo_instr_juridico_parc: string;
}
