import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('producao')
export class Producao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 76, nullable: true })
  caminho: string;

  @Column({ type: 'varchar', length: 19, nullable: true })
  data_digitalizacao: string;

  @Column({ type: 'varchar', length: 19, nullable: true })
  data_empenho: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  doc_caixa: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  num_empenho: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  num_pagamento: string;

  @Column({ type: 'varchar', length: 6, nullable: true })
  credor_id: string;

  @Column({ type: 'bigint', nullable: true })
  id_documento: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  usuario: string;

  @Column({ type: 'smallint', nullable: true })
  qtde_paginas: number;
}
