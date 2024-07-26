import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subgrupo')
export class Subgrupo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'tinyint', nullable: true })
  cod_grupo: number;

  @Column({ type: 'tinyint', nullable: true })
  cod_subgrupo: number;

  @Column({ type: 'varchar', length: 5, nullable: true })
  desc_subgrupo: string;
}
