export class CreateUsersDTO {
  id: number;
  login: string;
  senha: string;
  ativo: string;
  email: string;
  telefone: string;
  criado_em: Date;
  alterado_em: Date;
  criado_por: number;
  alterado_por: number;
}
