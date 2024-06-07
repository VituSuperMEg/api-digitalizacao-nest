import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Caixas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  descricao: string;
}
