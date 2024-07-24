import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Municipios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  descricao: string;

  @Column({ length: 255 })
  responsavel: string;

  @Column({ length: 11, type: 'char' })
  @Index({ unique: true })
  cpf: string;

  @Column({ length: 255 })
  num_expediente: string;

  @Column({ type: 'timestamp without time zone' })
  criado_em: Date;

  @Column({ type: 'timestamp without time zone' })
  alterado_em: Date;
}
