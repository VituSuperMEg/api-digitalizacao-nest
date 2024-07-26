import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nf')
export class Nf {
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
  data_emissao_emp: string;

  @Column({ type: 'int', nullable: true })
  num_empenho: number;

  @Column({ type: 'varchar', length: 19, nullable: true })
  data_liquidacao_desp: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  tipo_nf: string;

  @Column({ type: 'bigint', nullable: true })
  num_notafiscal: string;

  @Column({ type: 'mediumint', nullable: true })
  data_referencia: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  serie_selo: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  numero_selo_transito: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  numero_serie_selo: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  numero_formularios: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  data_limite_expedicao: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  num_cgf: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  uf_emitente: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  data_emissao_nf: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  valor_nf_liquido: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  valor_total_desconto: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  valor_bruto_nf: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  aliquota_iss: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  base_iss: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  tipo_emissao_nf: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  num_protocolo: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  chave_acesso: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  chave_verificacao: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  cnpj_emitente: string;
}
