export class UpdateCredorDTO {
  id: number;
  nome: string;
  tipo_documento: string;
  cpf: string;
  logradouro: string;
  numero: string;
  cep: string;
  email: string;
  cidade: string;
  telefone: string;
  telefone_complementar: string;
  banco: string;
  agencia: string;
  conta: string;
  observacoes: string;
  alterado_por: number;
  criado_por: number;
  criado_em: Date;
  alterado_em: Date;
}
