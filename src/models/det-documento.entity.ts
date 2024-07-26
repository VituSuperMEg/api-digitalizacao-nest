import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('det_documento')
export class DetDocumento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  cod_doc: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  path_doc: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  qtde_paginas: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  credor_id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  tipo_documento: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  data_digitalizacao: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  nome_arquivo: string;
}
