import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('und_ocmt')
export class UndOcmt {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'tinyint', nullable: true })
  cod_und_ocmt: number;

  @Column({ type: 'varchar', length: 21, nullable: true })
  desc_und_ocmt: string;

  @Column({ type: 'varchar', nullable: true })
  obs_und_ocmt: string;

  @Column({ type: 'varchar', nullable: true })
  tipo_und_ocmt: string;
}
