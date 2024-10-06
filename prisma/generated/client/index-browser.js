
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.20.0
 * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
 */
Prisma.prismaVersion = {
  client: "5.20.0",
  engine: "06fc58a368dc7be9fbbbe894adf8d445d208c284"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  login: 'login',
  senha: 'senha',
  nome: 'nome',
  ativo: 'ativo',
  email: 'email',
  telefone: 'telefone',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por'
};

exports.Prisma.AnoMesScalarFieldEnum = {
  id: 'id',
  ano: 'ano',
  mes: 'mes',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por'
};

exports.Prisma.SalasScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por'
};

exports.Prisma.ArmarioScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em',
  salas_id: 'salas_id',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por'
};

exports.Prisma.CredoresScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  tipo_documento: 'tipo_documento',
  cpf: 'cpf',
  logradouro: 'logradouro',
  numero: 'numero',
  cep: 'cep',
  email: 'email',
  cidade: 'cidade',
  telefone: 'telefone',
  telefone_complementar: 'telefone_complementar',
  banco: 'banco',
  agencia: 'agencia',
  conta: 'conta',
  observacoes: 'observacoes',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por'
};

exports.Prisma.CaixasScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por'
};

exports.Prisma.PrateleiraScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por'
};

exports.Prisma.ContasExtrasScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  codigo: 'codigo',
  exercicio: 'exercicio',
  orcamento: 'orcamento',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em'
};

exports.Prisma.CabDocumentoScalarFieldEnum = {
  id: 'id',
  cod_ent: 'cod_ent',
  cod_cc: 'cod_cc',
  cod_seq: 'cod_seq',
  cod_destino: 'cod_destino',
  cod_setor: 'cod_setor',
  cod_grupo: 'cod_grupo',
  cod_subgrupo: 'cod_subgrupo',
  dta_doc: 'dta_doc',
  path_doc: 'path_doc',
  obs_doc: 'obs_doc',
  ano_doc: 'ano_doc',
  mes_doc: 'mes_doc',
  nome_usuario: 'nome_usuario',
  dta_digita: 'dta_digita',
  qtde_folhas: 'qtde_folhas',
  cod_suborgao: 'cod_suborgao',
  credor_id: 'credor_id',
  num_processo: 'num_processo',
  num_empenho: 'num_empenho',
  dta_pagamento: 'dta_pagamento',
  valor_pagamento: 'valor_pagamento',
  digitalizado: 'digitalizado',
  modalidade_licitacao: 'modalidade_licitacao',
  tipo_licitacao: 'tipo_licitacao',
  classificacao_economica: 'classificacao_economica',
  doc_caixa: 'doc_caixa',
  num_contrato: 'num_contrato',
  num_contrato_original: 'num_contrato_original',
  tipo_contrato: 'tipo_contrato',
  modalidade_contrato: 'modalidade_contrato',
  data_empenho: 'data_empenho',
  caixa_id: 'caixa_id',
  prateleria_id: 'prateleria_id',
  contas_extra_id: 'contas_extra_id',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por'
};

exports.Prisma.CentroCustoScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  cod_entidade: 'cod_entidade',
  cod_centro_custo: 'cod_centro_custo',
  ativo: 'ativo',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por'
};

exports.Prisma.GavetaScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  sala_id: 'sala_id',
  armario_id: 'armario_id',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em'
};

exports.Prisma.CompartimentoScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  sala_id: 'sala_id',
  armario_id: 'armario_id',
  gaveta_id: 'gaveta_id',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em'
};

exports.Prisma.OrgaosScalarFieldEnum = {
  id: 'id',
  sigla: 'sigla',
  descricao: 'descricao',
  cpf: 'cpf',
  responsavel: 'responsavel',
  num_expediente: 'num_expediente',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por'
};

exports.Prisma.UnidadeOrcamentariaScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  cnpj: 'cnpj',
  ativo: 'ativo',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em',
  responsavel: 'responsavel',
  cod_unidade_orcamentaria: 'cod_unidade_orcamentaria',
  cod_orgao: 'cod_orgao',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por'
};

exports.Prisma.DespesaCategoriaEconomicaScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  cod_municipio: 'cod_municipio',
  exercicio: 'exercicio',
  cod_orgao: 'cod_orgao',
  cod_unid_orc: 'cod_unid_orc',
  codigo_elmento: 'codigo_elmento',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por'
};

exports.Prisma.EntidadeScalarFieldEnum = {
  id: 'id',
  cod_ent: 'cod_ent',
  sigla: 'sigla',
  nome: 'nome',
  razao_social: 'razao_social',
  cnpj: 'cnpj',
  endereco: 'endereco',
  bairro: 'bairro',
  cod_ibge: 'cod_ibge',
  telefone: 'telefone',
  telefone_complementar: 'telefone_complementar',
  fax: 'fax',
  responsavel: 'responsavel',
  email: 'email',
  site: 'site',
  perc_pmss: 'perc_pmss',
  inst_prev: 'inst_prev',
  fgts: 'fgts',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por'
};

exports.Prisma.DestinoScalarFieldEnum = {
  id: 'id',
  cod_ent: 'cod_ent',
  cod_cc: 'cod_cc',
  cod_und_ormt: 'cod_und_ormt',
  desc_destino: 'desc_destino',
  responsavel_destino: 'responsavel_destino',
  cod_orgao: 'cod_orgao',
  cd_unid: 'cd_unid',
  exercicio: 'exercicio',
  ativo: 'ativo',
  cpf_gestor: 'cpf_gestor',
  nome_gestor: 'nome_gestor',
  forma_ingresso: 'forma_ingresso',
  tipo_relacao: 'tipo_relacao',
  numero_expediente: 'numero_expediente',
  data_inicio_gestao: 'data_inicio_gestao',
  data_fim_gestao: 'data_fim_gestao',
  competencia: 'competencia',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por'
};

exports.Prisma.TiposDocumentosScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por'
};

exports.Prisma.DetDocumentoScalarFieldEnum = {
  id: 'id',
  cod_doc: 'cod_doc',
  path_doc: 'path_doc',
  qtde_paginas: 'qtde_paginas',
  credor_id: 'credor_id',
  tipo_documento: 'tipo_documento',
  data_digitalizacao: 'data_digitalizacao',
  nome_arquivo: 'nome_arquivo',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por'
};

exports.Prisma.EstanteScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por'
};

exports.Prisma.SetoresScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  unidade_orcamentaria_id: 'unidade_orcamentaria_id',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por'
};

exports.Prisma.GrupoScalarFieldEnum = {
  id: 'id',
  cod_grupo: 'cod_grupo',
  descricao: 'descricao',
  loteval_grupo: 'loteval_grupo',
  patrimonio: 'patrimonio',
  criado_em: 'criado_em',
  alterado_em: 'alterado_em',
  criado_por: 'criado_por',
  alterado_por: 'alterado_por'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Users: 'Users',
  AnoMes: 'AnoMes',
  Salas: 'Salas',
  Armario: 'Armario',
  Credores: 'Credores',
  Caixas: 'Caixas',
  Prateleira: 'Prateleira',
  ContasExtras: 'ContasExtras',
  CabDocumento: 'CabDocumento',
  CentroCusto: 'CentroCusto',
  Gaveta: 'Gaveta',
  Compartimento: 'Compartimento',
  Orgaos: 'Orgaos',
  UnidadeOrcamentaria: 'UnidadeOrcamentaria',
  DespesaCategoriaEconomica: 'DespesaCategoriaEconomica',
  Entidade: 'Entidade',
  Destino: 'Destino',
  TiposDocumentos: 'TiposDocumentos',
  DetDocumento: 'DetDocumento',
  Estante: 'Estante',
  Setores: 'Setores',
  Grupo: 'Grupo'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
