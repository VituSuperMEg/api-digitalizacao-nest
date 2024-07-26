import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('municipio')
export class Municipio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true })
  cod_ibge: number;

  @Column({ type: 'varchar', length: 32, nullable: true })
  nome_municipio: string;

  @Column({ type: 'varchar', length: 2, nullable: true })
  cod_uf: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  logo: string;
}
