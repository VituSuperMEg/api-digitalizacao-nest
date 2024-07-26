import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('plano_contas')
export class PlanoContas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 12, nullable: true })
  cod_plano_contas: string;

  @Column({ type: 'varchar', length: 69, nullable: true })
  desc_plano_contas: string;

  @Column({ type: 'text', nullable: true })
  obs_plano_contas: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  tipo_plano_contas: string;
}
