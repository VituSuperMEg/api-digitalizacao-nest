import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('entidade')
export class Entidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint', nullable: true })
  cod_ent: number;

  @Column({ type: 'varchar', length: 15, nullable: true })
  nome_ent: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  razao_social: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  endereco_ent: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  compl_ent: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  bairro_ent: string;

  @Column({ type: 'int', nullable: true })
  cod_ibge_ent: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  cep_ent: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  fone1_ent: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  fone2_ent: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  fax_ent: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email_ent: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  web_ent: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  perc_pmss: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  inst_prev: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  sigla: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  fgts: string;
}
