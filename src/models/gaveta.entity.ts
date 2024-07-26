import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gaveta')
export class Gaveta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  descricao: string;

  @Column({ type: 'number', nullable: true })
  sala_id: number;

  @Column({ type: 'number', nullable: true })
  armario_id: number;
}
