import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('configura')
export class Configura {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint', nullable: true })
  cod_ent: number;

  @Column({ type: 'smallint', nullable: true })
  cod_cc: number;

  @Column({ type: 'int', nullable: true })
  cod_ibge: number;

  @Column({ type: 'varchar', length: 35, nullable: true })
  nome_secretaria: string;

  @Column({ type: 'varchar', length: 6, nullable: true })
  endereco: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  complemento: string;

  @Column({ type: 'varchar', length: 6, nullable: true })
  bairro: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  cep: string;

  @Column({ type: 'smallint', nullable: true })
  periodo: number;

  @Column({ type: 'varchar', length: 1, nullable: true })
  ver_periodo: string;

  @Column({ type: 'varchar', length: 60, nullable: true })
  msg_1: string;

  @Column({ type: 'varchar', length: 40, nullable: true })
  msg_2: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  msg_3: string;

  @Column({ type: 'varchar', length: 14, nullable: true })
  msg_4: string;

  @Column({ type: 'varchar', length: 1, nullable: true })
  msg_5: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  msg_6: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  telefone: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  outro_telefone: string;

  @Column({ type: 'varchar', length: 33, nullable: true })
  imagem: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  dta_bios: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  dta_inst: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  hora_inst: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  dta_atual: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  hora_atual: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  serial_hd: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  s: string;

  @Column({ type: 'smallint', nullable: true })
  cd_municipio: number;

  @Column({ type: 'varchar', length: 28, nullable: true })
  caminho_doc: string;

  @Column({ type: 'tinyint', nullable: true })
  msg_7: number;

  @Column({ type: 'varchar', length: 1, nullable: true })
  entidade: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  nome_gestor: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  caminhoporal: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  usuario: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  senha: string;

  @Column({ type: 'tinyint', nullable: true })
  portaurl: number;

  @Column({ type: 'varchar', length: 0, nullable: true })
  caminhobancoweb: string;

  @Column({ type: 'bigint', nullable: true })
  cnpj: number;

  @Column({ type: 'varchar', length: 0, nullable: true })
  nome_empresa: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  cnpj_empresa: string;

  @Column({ type: 'varchar', length: 0, nullable: true })
  email: string;
}
