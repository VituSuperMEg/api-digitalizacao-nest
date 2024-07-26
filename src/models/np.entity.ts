import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('np')
export class Np {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint', nullable: true })
  tipo: number;

  @Column({ type: 'smallint', nullable: true })
  codigo_municipio: number;

  @Column({ type: 'smallint', nullable: true })
  exercicio: number;

  @Column({ type: 'tinyint', nullable: true })
  cd_orgao: number;

  @Column({ type: 'tinyint', nullable: true })
  cd_unid: number;

  @Column({ type: 'varchar', length: 19, nullable: true })
  data_emissao_ne: string;

  @Column({ type: 'int', nullable: true })
  num_nota_empenho: number;

  @Column({ type: 'smallint', nullable: true })
  num_subempenho: number;

  @Column({ type: 'int', nullable: true })
  num_notapagamento: number;

  @Column({ type: 'mediumint', nullable: true })
  data_referencia: number;

  @Column({ type: 'int', nullable: true })
  num_doc_caixa: number;

  @Column({ type: 'varchar', length: 19, nullable: true })
  data_np: string;

  @Column({ type: 'decimal', precision: 9, scale: 2, nullable: true })
  valor_np: number;

  @Column({ type: 'tinyint', nullable: true })
  valor_emp_a_pagar: number;

  @Column({ type: 'bigint', nullable: true })
  cpf_resppagamento: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  nome_responsavel: string;
}
