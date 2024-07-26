import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contas_extra')
export class ContasExtra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true })
  codigo: number;

  @Column({ type: 'varchar', length: 44, nullable: true })
  descricao: string;

  @Column({ type: 'varchar', length: 6, nullable: true })
  exercicio: string;

  @Column({ type: 'varchar', length: 6, nullable: true })
  orcamento: string;
}
