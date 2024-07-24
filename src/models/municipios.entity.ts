import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Orgaos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nome: string;

  @Column({ length: 255 })
  cod_ibge: string;

  @Column({ length: 255 })
  cod_uf: string;

  @Column({ type: 'timestamp without time zone' })
  criado_em: Date;

  @Column({ type: 'timestamp without time zone' })
  alterado_em: Date;
}
