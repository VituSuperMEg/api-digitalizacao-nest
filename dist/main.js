/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(3);
const entidades_module_1 = __webpack_require__(4);
const conexaoDB_1 = __webpack_require__(8);
const caixas_module_1 = __webpack_require__(10);
const auth_module_1 = __webpack_require__(22);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [entidades_module_1.EntidadesModule, caixas_module_1.CaixasModule, auth_module_1.AuthModule],
        controllers: [],
        providers: [conexaoDB_1.ConnectionService],
    })
], AppModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntidadesModule = void 0;
const common_1 = __webpack_require__(3);
const entidades_controller_1 = __webpack_require__(5);
const conexaoDB_1 = __webpack_require__(8);
let EntidadesModule = class EntidadesModule {
};
exports.EntidadesModule = EntidadesModule;
exports.EntidadesModule = EntidadesModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [entidades_controller_1.EntidadesController],
        providers: [conexaoDB_1.ConnectionService],
    })
], EntidadesModule);


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntidadesController = void 0;
const common_1 = __webpack_require__(3);
const clients_1 = __webpack_require__(6);
const conexao_guard_1 = __webpack_require__(7);
const conexaoDB_1 = __webpack_require__(8);
let EntidadesController = class EntidadesController {
    constructor(connectionService) {
        this.connectionService = connectionService;
    }
    getEstados() {
        return clients_1.clientes.estados;
    }
    getMunicipios(uf) {
        return clients_1.clientes.municipios[uf];
    }
    getEntidade(ibge) {
        return clients_1.clientes.entidades[ibge];
    }
    async getConectarBanco(cliente, req) {
        const connection = req.dbConnection;
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        const result = await queryRunner.query('SELECT * from caixas');
        await queryRunner.release();
        return result;
    }
};
exports.EntidadesController = EntidadesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EntidadesController.prototype, "getEstados", null);
__decorate([
    (0, common_1.Get)('municipios/:uf'),
    __param(0, (0, common_1.Param)('uf')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntidadesController.prototype, "getMunicipios", null);
__decorate([
    (0, common_1.Get)('entidades/:ibge'),
    __param(0, (0, common_1.Param)('ibge')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntidadesController.prototype, "getEntidade", null);
__decorate([
    (0, common_1.UseGuards)(conexao_guard_1.DatabaseGuard),
    (0, common_1.Get)('/:cliente'),
    __param(0, (0, common_1.Param)('cliente')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EntidadesController.prototype, "getConectarBanco", null);
exports.EntidadesController = EntidadesController = __decorate([
    (0, common_1.Controller)('/api/v1/entidades'),
    __metadata("design:paramtypes", [typeof (_a = typeof conexaoDB_1.ConnectionService !== "undefined" && conexaoDB_1.ConnectionService) === "function" ? _a : Object])
], EntidadesController);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.configuracoes = exports.clientes = void 0;
exports.clientes = {
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
exports.configuracoes = {
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


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseGuard = void 0;
const common_1 = __webpack_require__(3);
const conexaoDB_1 = __webpack_require__(8);
let DatabaseGuard = class DatabaseGuard {
    constructor(connectionService) {
        this.connectionService = connectionService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const client_id = request.headers['x-cliente-id'];
        const cliente = String(client_id);
        if (!cliente) {
            console.error('Cliente não fornecido nos parâmetros da solicitação.');
            return false;
        }
        try {
            const connection = await this.connectionService.getConnection(cliente);
            request.dbConnection = connection;
            return true;
        }
        catch (error) {
            console.error(`Erro de conexão ao banco de dados para o cliente ${cliente}:`, error);
            return false;
        }
    }
};
exports.DatabaseGuard = DatabaseGuard;
exports.DatabaseGuard = DatabaseGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof conexaoDB_1.ConnectionService !== "undefined" && conexaoDB_1.ConnectionService) === "function" ? _a : Object])
], DatabaseGuard);


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectionService = void 0;
const common_1 = __webpack_require__(3);
const clients_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(9);
let ConnectionService = class ConnectionService {
    constructor() {
        this.connections = new Map();
    }
    async getConnection(entidade) {
        const dbConfig = clients_1.configuracoes.database[entidade];
        if (!dbConfig) {
            throw new Error(`Configuração do banco de dados para a entidade ${entidade} não encontrada.`);
        }
        const connectionManager = (0, typeorm_1.getConnectionManager)();
        const connectionName = dbConfig.database || 'default';
        console.table(dbConfig);
        if (connectionManager.has(connectionName)) {
            const existingConnection = connectionManager.get(connectionName);
            if (existingConnection.isConnected) {
                return existingConnection;
            }
            else {
                await existingConnection.connect();
                return existingConnection;
            }
        }
        const connectionOptions = {
            type: dbConfig.type,
            host: dbConfig.host,
            port: parseInt(dbConfig.port, 10),
            username: dbConfig.username,
            password: dbConfig.password,
            database: dbConfig.database,
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: true,
            name: connectionName,
        };
        try {
            const connection = connectionManager.create(connectionOptions);
            await connection.connect();
            this.connections.set(connectionName, connection);
            return connection;
        }
        catch (error) {
            console.error(`Erro ao conectar ao banco de dados ${connectionName}:`, error);
            throw error;
        }
    }
};
exports.ConnectionService = ConnectionService;
exports.ConnectionService = ConnectionService = __decorate([
    (0, common_1.Injectable)()
], ConnectionService);


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CaixasModule = void 0;
const common_1 = __webpack_require__(3);
const conexaoDB_1 = __webpack_require__(8);
const caixas_service_1 = __webpack_require__(11);
const caixas_providers_1 = __webpack_require__(13);
const caixas_controller_1 = __webpack_require__(14);
const database_module_1 = __webpack_require__(21);
const auth_module_1 = __webpack_require__(22);
let CaixasModule = class CaixasModule {
};
exports.CaixasModule = CaixasModule;
exports.CaixasModule = CaixasModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, auth_module_1.AuthModule],
        controllers: [caixas_controller_1.CaixasController],
        providers: [...caixas_providers_1.caixasProviders, conexaoDB_1.ConnectionService, caixas_service_1.CaixasService],
    })
], CaixasModule);


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CaixasService = void 0;
const common_1 = __webpack_require__(3);
const caixas_entity_1 = __webpack_require__(12);
const typeorm_1 = __webpack_require__(9);
let CaixasService = class CaixasService {
    constructor(caixasRespository) {
        this.caixasRespository = caixasRespository;
    }
    setConnection(connection) {
        this.caixasRespository = connection.getRepository(caixas_entity_1.Caixas);
    }
    findAll() {
        return this.caixasRespository.find();
    }
    find(id) {
        return this.caixasRespository.findOne({
            where: { id },
        });
    }
    create(data) {
        return this.caixasRespository.create({
            descricao: data.descricao.toUpperCase(),
        });
    }
    async update(data) {
        const property = await this.caixasRespository.findOne({
            where: { id: data.id },
        });
        return this.caixasRespository.save({
            ...property,
            ...data,
        });
    }
    async delete(id) {
        return this.caixasRespository.delete(id);
    }
};
exports.CaixasService = CaixasService;
exports.CaixasService = CaixasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CAIXAS_REPOSITORY')),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], CaixasService);


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Caixas = void 0;
const typeorm_1 = __webpack_require__(9);
let Caixas = class Caixas {
};
exports.Caixas = Caixas;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Caixas.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Caixas.prototype, "descricao", void 0);
exports.Caixas = Caixas = __decorate([
    (0, typeorm_1.Entity)()
], Caixas);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.caixasProviders = void 0;
const caixas_entity_1 = __webpack_require__(12);
exports.caixasProviders = [
    {
        provide: 'CAIXAS_REPOSITORY',
        useFactory: (dataSouce) => dataSouce.getRepository(caixas_entity_1.Caixas),
        inject: ['DATA_SOURCE'],
    },
];


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CaixasController = void 0;
const common_1 = __webpack_require__(3);
const caixas_service_1 = __webpack_require__(11);
const auth_guards_1 = __webpack_require__(15);
const create_caixas_dto_1 = __webpack_require__(18);
const express_1 = __webpack_require__(19);
const update_caixas_dto_1 = __webpack_require__(20);
let CaixasController = class CaixasController {
    constructor(caixasServices) {
        this.caixasServices = caixasServices;
    }
    findAll(request) {
        const connection = request.dbConnection;
        this.caixasServices.setConnection(connection);
        return this.caixasServices.findAll();
    }
    find(id) {
        return this.caixasServices.find(+id);
    }
    create(data, res) {
        const rs = this.caixasServices.create(data);
        if (rs) {
            res.status(201).json([
                {
                    message: 'Criando com Sucesso',
                },
            ]);
        }
    }
    update(data, res) {
        const rs = this.caixasServices.update(data);
        if (rs) {
            res.status(201).json([
                {
                    message: 'Alterado com Sucesso',
                },
            ]);
        }
    }
    delete(id) {
        return this.caixasServices.delete(+id);
    }
};
exports.CaixasController = CaixasController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof Request !== "undefined" && Request) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CaixasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CaixasController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof create_caixas_dto_1.CreateCaixasDTO !== "undefined" && create_caixas_dto_1.CreateCaixasDTO) === "function" ? _c : Object, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], CaixasController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof update_caixas_dto_1.UpdateCaixasDTO !== "undefined" && update_caixas_dto_1.UpdateCaixasDTO) === "function" ? _e : Object, typeof (_f = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], CaixasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CaixasController.prototype, "delete", null);
exports.CaixasController = CaixasController = __decorate([
    (0, common_1.Controller)('/api/v1/caixas'),
    (0, common_1.UseGuards)(auth_guards_1.AuthAndDatabaseGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof caixas_service_1.CaixasService !== "undefined" && caixas_service_1.CaixasService) === "function" ? _a : Object])
], CaixasController);


/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthAndDatabaseGuard = void 0;
const common_1 = __webpack_require__(3);
const jwt_1 = __webpack_require__(16);
const constants_1 = __webpack_require__(17);
const conexaoDB_1 = __webpack_require__(8);
let AuthAndDatabaseGuard = class AuthAndDatabaseGuard {
    constructor(jwtService, connectionService) {
        this.jwtService = jwtService;
        this.connectionService = connectionService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: constants_1.jwtConstants.secret,
            });
            request['user'] = payload;
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
        const client_id = request.headers['x-cliente-id'];
        const cliente = String(client_id);
        if (!cliente) {
            console.error('Cliente não fornecido nos parâmetros da solicitação.');
            throw new common_1.UnauthorizedException('Cliente ID não fornecido.');
        }
        try {
            const connection = await this.connectionService.getConnection(cliente);
            request.dbConnection = connection;
        }
        catch (error) {
            console.error(`Erro de conexão ao banco de dados para o cliente ${cliente}:`, error);
            throw new common_1.UnauthorizedException(`Erro de conexão ao banco de dados para o cliente ${cliente}`);
        }
        return true;
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
};
exports.AuthAndDatabaseGuard = AuthAndDatabaseGuard;
exports.AuthAndDatabaseGuard = AuthAndDatabaseGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof conexaoDB_1.ConnectionService !== "undefined" && conexaoDB_1.ConnectionService) === "function" ? _b : Object])
], AuthAndDatabaseGuard);


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jwtConstants = void 0;
exports.jwtConstants = {
    secret: '5bfca4a1474397f842accb61211ab197',
};


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCaixasDTO = void 0;
class CreateCaixasDTO {
}
exports.CreateCaixasDTO = CreateCaixasDTO;


/***/ }),
/* 19 */
/***/ ((module) => {

module.exports = require("express");

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCaixasDTO = void 0;
class UpdateCaixasDTO {
}
exports.UpdateCaixasDTO = UpdateCaixasDTO;


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(3);
const core_1 = __webpack_require__(1);
const conexaoDB_1 = __webpack_require__(8);
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [
            conexaoDB_1.ConnectionService,
            {
                provide: 'DATA_SOURCE',
                scope: common_1.Scope.REQUEST,
                useFactory: async (connectionService, request) => {
                    const entityId = request.headers['x-cliente-id'];
                    if (!entityId) {
                        throw new Error('Entity ID not provided in the request headers');
                    }
                    return connectionService.getConnection(entityId);
                },
                inject: [conexaoDB_1.ConnectionService, core_1.REQUEST],
            },
        ],
        exports: ['DATA_SOURCE', conexaoDB_1.ConnectionService],
    })
], DatabaseModule);


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(3);
const auth_controller_1 = __webpack_require__(23);
const auth_service_1 = __webpack_require__(24);
const jwt_1 = __webpack_require__(16);
const constants_1 = __webpack_require__(17);
const users_module_1 = __webpack_require__(27);
const users_service_1 = __webpack_require__(25);
const users_providers_1 = __webpack_require__(29);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '3600s' },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, users_service_1.UsersService, ...users_providers_1.usersProviders],
    })
], AuthModule);


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(3);
const auth_service_1 = __webpack_require__(24);
const express_1 = __webpack_require__(19);
let AuthController = class AuthController {
    constructor(service) {
        this.service = service;
    }
    async login(data, res) {
        const { login, pass } = data;
        return this.service.signIn(login, pass, res);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AuthController.prototype, "login", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('login'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(3);
const jwt_1 = __webpack_require__(16);
const users_service_1 = __webpack_require__(25);
const response_message_1 = __webpack_require__(26);
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signIn(login, pass, res) {
        const user = await this.usersService.findLogin(login);
        if (!user) {
            return (0, response_message_1.Error)('Este usuário não existe', res);
        }
        const payload = { sub: user.id, username: user.login };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(9);
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    findAll() {
        return this.usersRepository.find();
    }
    find(id) {
        return this.usersRepository.findOne({
            where: { id },
        });
    }
    findLogin(login) {
        return this.usersRepository.findOne({
            where: { login },
        });
    }
    create(data) { }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USERS_REPOSITORY')),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], UsersService);


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Error = void 0;
const common_1 = __webpack_require__(3);
const Error = (title, res, err) => {
    res.status(common_1.HttpStatus.BAD_REQUEST).json({
        message: title,
        message_erro: err,
    });
};
exports.Error = Error;


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(3);
const users_controller_1 = __webpack_require__(28);
const users_service_1 = __webpack_require__(25);
const users_providers_1 = __webpack_require__(29);
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService, ...users_providers_1.usersProviders],
    })
], UsersModule);


/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(3);
const users_service_1 = __webpack_require__(25);
let UsersController = class UsersController {
    constructor(usersServices) {
        this.usersServices = usersServices;
    }
};
exports.UsersController = UsersController;
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.usersProviders = void 0;
const users_entity_1 = __webpack_require__(30);
exports.usersProviders = [
    {
        provide: 'USERS_REPOSITORY',
        useFactory: (dataSouce) => dataSouce.getRepository(users_entity_1.Users),
        inject: ['DATA_SOURCE'],
    },
];


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Users = void 0;
const typeorm_1 = __webpack_require__(9);
let Users = class Users {
};
exports.Users = Users;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Users.prototype, "login", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Users.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 1, default: 'S' }),
    __metadata("design:type", String)
], Users.prototype, "ativo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, unique: true }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Users.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp without time zone' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Users.prototype, "criado_em", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp without time zone' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Users.prototype, "alterado_em", void 0);
exports.Users = Users = __decorate([
    (0, typeorm_1.Entity)()
], Users);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3333);
}
bootstrap();

})();

/******/ })()
;