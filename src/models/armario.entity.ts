import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('armario')
export class Armario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  descricao: string;

  @Column({ type: 'timestamp without time zone' })
  sala_id: number;
}
