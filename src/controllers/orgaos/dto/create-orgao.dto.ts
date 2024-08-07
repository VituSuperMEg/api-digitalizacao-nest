import { IsString, IsInt } from 'class-validator';

export class CreateOrgaosDTO {
  @IsString({
    message: 'Este campo só pode ser texto',
  })
  sigla: string;
  @IsString({
    message: 'Este campo só pode ser texto',
  })
  descricao: string;
  @IsString({
    message: 'Este campo só pode ser texto',
  })
  cpf: string;
  @IsString({
    message: 'Este campo só pode ser texto',
  })
  responsavel: string;
  @IsString()
  num_expediente: string;
  criado_em: Date;
  alterado_em: Date;
  criado_por: number;
  alterado_por: number;
}
