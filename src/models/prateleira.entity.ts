import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('prateleira')
export class Prateleira {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 6, nullable: true })
  descricao: string;
}
