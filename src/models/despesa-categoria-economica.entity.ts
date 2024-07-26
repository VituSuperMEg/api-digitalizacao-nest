import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('despesa_categoria_economica')
export class DespesaCategoriaEconomica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint', nullable: true })
  cod_municipio: number;

  @Column({ type: 'mediumint', nullable: true })
  exercicio: number;

  @Column({ type: 'tinyint', nullable: true })
  cd_orgao: number;

  @Column({ type: 'tinyint', nullable: true })
  cd_unid_orc: number;

  @Column({ type: 'tinyint', nullable: true })
  codigo_elemento: number;

  @Column({ type: 'varchar', length: 7, nullable: true })
  descricao: string;
}
