import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Credores {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, type: 'varchar' })
  nome: string;

  @Column({ length: 255, type: 'varchar' })
  tipo_documento: string;

  @Column({ length: 11, type: 'char' })
  @Index({ unique: true })
  cpf: string;

  @Column({ length: 255, type: 'varchar' })
  logradouro: string;

  @Column({ length: 20, type: 'varchar' })
  numero: string;

  @Column({ length: 255, type: 'varchar' })
  bairro: string;

  @Column({ length: 8, type: 'char' })
  cep: string;

  @Column({ length: 255, type: 'varchar' })
  @Index({ unique: true })
  email: string;

  @Column({ length: 255, type: 'varchar' })
  cidade: string;

  @Column({ length: 20, type: 'varchar' })
  telefone: string;

  @Column({ length: 20, type: 'varchar' })
  telefone_complementar: string;

  @Column({ length: 20, type: 'varchar' })
  banco: string;

  @Column({ length: 20, type: 'varchar' })
  agencia: string;

  @Column({ length: 20, type: 'varchar' })
  conta: string;

  @Column({ length: 20, type: 'varchar' })
  observacoes: string;

  @Column({ type: 'timestamp without time zone' })
  criado_em: Date;

  @Column({ type: 'timestamp without time zone' })
  alterado_em: Date;
}
