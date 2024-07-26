import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('destino')
export class Destino {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint', nullable: true })
  cod_ent: number;

  @Column({ type: 'smallint', nullable: true })
  cod_cc: number;

  @Column({ type: 'smallint', nullable: true })
  cod_destino: number;

  @Column({ type: 'varchar', length: 2, nullable: true })
  cod_und_ocmt: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  desc_destino: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  resp_destino: string;

  @Column({ type: 'tinyint', nullable: true })
  cd_orgao: number;

  @Column({ type: 'varchar', length: 2, nullable: true })
  cd_unid: string;

  @Column({ type: 'varchar', length: 6, nullable: true })
  exercicio: string;

  @Column({ type: 'varchar', length: 1, nullable: true })
  ativo: string;

  @Column({ type: 'varchar', length: 11, nullable: true })
  cpf_gestor: string;

  @Column({ type: 'varchar', length: 6, nullable: true })
  nome_gestor: string;

  @Column({ type: 'varchar', length: 1, nullable: true })
  forma_ingresso: string;

  @Column({ type: 'varchar', length: 1, nullable: true })
  tipo_relacao: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  numero_expediente: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  data_inicio_gestao: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  data_fim_gestao: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  competencia: string;
}
