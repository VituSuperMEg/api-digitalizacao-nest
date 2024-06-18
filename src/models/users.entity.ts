import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  login: string;

  @Column({ length: 255 })
  senha: string;

  @Column({ length: 1, default: 'S' })
  ativo: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 20 })
  telefone: string;

  @Column({ type: 'timestamp without time zone' })
  criado_em: Date;

  @Column({ type: 'timestamp without time zone' })
  alterado_em: Date;
}
