import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CentroCusto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 6, type: 'smallint', default: null })
  cod_ent: string;

  @Column({ length: 6, type: 'smallint', default: null })
  cod_cc: string;

  @Column({ length: 255, type: 'varchar', default: null })
  descricao: string;

  @Column({ length: 1, type: 'smallint', default: null })
  ativa_cc: string;

  @Column({ type: 'timestamp without time zone' })
  criado_em: Date;

  @Column({ type: 'timestamp without time zone' })
  alterado_em: Date;
}
