import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Compartimento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, type: 'varchar', default: null })
  descricao: string;

  @Column({ length: 1, type: 'int', default: null })
  sala_id: number;

  @Column({ length: 1, type: 'int', default: null })
  armario_id: number;

  @Column({ length: 1, type: 'int', default: null })
  gaveta_id: number;

  @Column({ type: 'timestamp without time zone' })
  criado_em: Date;

  @Column({ type: 'timestamp without time zone' })
  alterado_em: Date;
}
