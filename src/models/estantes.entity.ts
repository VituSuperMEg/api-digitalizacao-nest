import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Estante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  descricao: string;

  @Column({ type: 'timestamp without time zone' })
  criado_em: Date;

  @Column({ type: 'timestamp without time zone' })
  alterado_em: Date;
}