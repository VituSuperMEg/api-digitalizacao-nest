import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('grupo')
export class Grupo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'tinyint', nullable: true })
  cod_grupo: number;

  @Column({ type: 'varchar', length: 26, nullable: true })
  desc_grupo: string;

  @Column({ type: 'varchar', length: 1, nullable: true })
  loteval_grupo: string;

  @Column({ type: 'varchar', length: 1, nullable: true })
  patrimonio: string;
}
