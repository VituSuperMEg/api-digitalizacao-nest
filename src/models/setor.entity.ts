import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('setor')
export class Setor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint', nullable: true })
  cod_ent: number;

  @Column({ type: 'smallint', nullable: true })
  cod_cc: number;

  @Column({ type: 'smallint', nullable: true })
  cod_destino: number;

  @Column({ type: 'smallint', nullable: true })
  cod_setor: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  desc_setor: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  ref: string;

  @Column({ type: 'varchar', length: 1, nullable: true })
  inf_tcm: string;
}
