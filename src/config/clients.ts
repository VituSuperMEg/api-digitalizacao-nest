export const clientes = {
  estados: {
    AC: 'Acre',
    AL: 'Alagoas',
    AP: 'Amapá',
    AM: 'Amazonas',
    BA: 'Bahia',
    CE: 'Ceará',
    DF: 'Distrito Federal',
    ES: 'Espírito Santo',
    GO: 'Goiás',
    MA: 'Maranhão',
    MT: 'Mato Grosso',
    MS: 'Mato Grosso do Sul',
    MG: 'Minas Gerais',
    PA: 'Pará',
    PB: 'Paraíba',
    PR: 'Paraná',
    PE: 'Pernambuco',
    PI: 'Piauí',
    RJ: 'Rio de Janeiro',
    RN: 'Rio Grande do Norte',
    RS: 'Rio Grande do Sul',
    RO: 'Rondônia',
    RR: 'Roraima',
    SC: 'Santa Catarina',
    SP: 'São Paulo',
    SE: 'Sergipe',
    TO: 'Tocantins',
  },
  municipios: {
    CE: {
      2303808: 'Cedro',
    },
  },
  entidades: {
    2303808: {
      230380801: 'PREFEITURA',
    },
  },
};

export const configuracoes = {
  database: {
    0: {
      type: 'postgres',
      host: 'ipg04.aws.itarget.com.br',
      port: '5432',
      username: 'postgres',
      database: 'ipontowebdbpmsolonopole',
      password: 'S551bp7fRs4qRCWx2M5y',
    },
    230380801: {
      type: 'postgres',
      host: 'idg-02.ctguosegmz9j.sa-east-1.rds.amazonaws.com',
      port: '5432',
      username: 'postgres',
      database: 'modelo',
      password: 'S551bp7fRs4qRCWx2M5y',
    },
  },
};
