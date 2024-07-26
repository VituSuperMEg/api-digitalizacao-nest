import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('periodo')
export class Periodo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint', nullable: true })
  ano: number;

  @Column({ type: 'tinyint', nullable: true })
  mes: number;

  @Column({ type: 'varchar', length: 1, nullable: true })
  status: string;
}
