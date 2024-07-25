import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AnoMes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 6, type: 'smallint' })
  ano: string;

  @Column({ length: 4, type: 'smallint' })
  mes: string;
}
