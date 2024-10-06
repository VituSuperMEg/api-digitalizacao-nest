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
__webpack_require__(3);
const common_1 = __webpack_require__(4);
const entidades_module_1 = __webpack_require__(5);
const auth_module_1 = __webpack_require__(11);
const prisma_service_1 = __webpack_require__(9);
const database_guard_1 = __webpack_require__(8);
const users_module_1 = __webpack_require__(17);
const ano_mes_module_1 = __webpack_require__(24);
const salas_module_1 = __webpack_require__(29);
const armario_module_1 = __webpack_require__(35);
const core_1 = __webpack_require__(1);
const session_interceptor_1 = __webpack_require__(40);
const credores_module_1 = __webpack_require__(42);
const orgaos_module_1 = __webpack_require__(47);
const validation_pipe_1 = __webpack_require__(54);
const caixas_module_1 = __webpack_require__(56);
const prateleira_module_1 = __webpack_require__(61);
const contas_extras_module_1 = __webpack_require__(66);
const centro_custo_module_1 = __webpack_require__(71);
const gaveta_module_1 = __webpack_require__(76);
const compartimento_module_1 = __webpack_require__(81);
const unidade_orcamentaria_module_1 = __webpack_require__(86);
const tipos_documentos_module_1 = __webpack_require__(92);
const setores_module_1 = __webpack_require__(96);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            entidades_module_1.EntidadesModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            ano_mes_module_1.AnoMesModule,
            salas_module_1.SalasModule,
            armario_module_1.ArmarioModule,
            credores_module_1.CredoresModule,
            orgaos_module_1.OrgaosModule,
            caixas_module_1.CaixasModule,
            prateleira_module_1.PrateleiraModule,
            contas_extras_module_1.ContasExtrasModule,
            centro_custo_module_1.CentroCustoModule,
            gaveta_module_1.GavetaModule,
            compartimento_module_1.CompartimentoModule,
            unidade_orcamentaria_module_1.UnidadeOrcamentariaModule,
            tipos_documentos_module_1.TiposDocumentosModule,
            setores_module_1.SetoresModule,
        ],
        controllers: [],
        providers: [
            prisma_service_1.PrismaService,
            database_guard_1.DynamicDatabaseGuard,
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: session_interceptor_1.SessionInterceptor,
            },
            {
                provide: core_1.APP_PIPE,
                useClass: validation_pipe_1.ValidationPipe,
            },
        ],
    })
], AppModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntidadesModule = void 0;
const common_1 = __webpack_require__(4);
const entidades_controller_1 = __webpack_require__(6);
const prisma_service_1 = __webpack_require__(9);
let EntidadesModule = class EntidadesModule {
};
exports.EntidadesModule = EntidadesModule;
exports.EntidadesModule = EntidadesModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [entidades_controller_1.EntidadesController],
        providers: [prisma_service_1.PrismaService],
    })
], EntidadesModule);


/***/ }),
/* 6 */
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
const common_1 = __webpack_require__(4);
const clients_1 = __webpack_require__(7);
const database_guard_1 = __webpack_require__(8);
const prisma_service_1 = __webpack_require__(9);
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
        const prisma = req.dbConnection;
        const result = await prisma.caixas.findMany();
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
    (0, common_1.UseGuards)(database_guard_1.DynamicDatabaseGuard),
    (0, common_1.Get)('/:cliente'),
    __param(0, (0, common_1.Param)('cliente')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EntidadesController.prototype, "getConectarBanco", null);
exports.EntidadesController = EntidadesController = __decorate([
    (0, common_1.Controller)('/api/v1/entidades'),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], EntidadesController);


/***/ }),
/* 7 */
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
            host: 'localhost',
            port: '5432',
            username: 'postgres',
            database: 'wilton-digitalizacao',
            password: '3640',
        },
        230380801: {
            type: 'postgres',
            host: 'localhost',
            port: '5432',
            username: 'postgres',
            database: 'default',
            password: '3640',
        },
    },
};


/***/ }),
/* 8 */
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
exports.DynamicDatabaseGuard = void 0;
const common_1 = __webpack_require__(4);
const prisma_service_1 = __webpack_require__(9);
let DynamicDatabaseGuard = class DynamicDatabaseGuard {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const clientId = request.headers['x-cliente-id'];
        global.CLIENTE_ID = String(clientId);
        if (!clientId) {
            throw new Error('O CÓDIGO DO CLIENTE NÃO FOI INFORMADO');
        }
        await this.prismaService.setConnectionUrl(clientId);
        request.dbConnection = this.prismaService.getPrismaClient();
        return true;
    }
};
exports.DynamicDatabaseGuard = DynamicDatabaseGuard;
exports.DynamicDatabaseGuard = DynamicDatabaseGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], DynamicDatabaseGuard);


/***/ }),
/* 9 */
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
exports.PrismaService = void 0;
const common_1 = __webpack_require__(4);
const client_1 = __webpack_require__(10);
const clients_1 = __webpack_require__(7);
let PrismaService = class PrismaService extends client_1.PrismaClient {
    constructor() {
        super();
        this.prisma = this;
    }
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
    async setConnectionUrl(clientId) {
        const cliente = clients_1.configuracoes.database[+clientId];
        const url = `postgresql://${cliente.username}:${cliente.password}@${cliente.host}:${cliente.port}/${cliente.database}?schema=public`;
        await this.prisma.$disconnect();
        this.prisma = new client_1.PrismaClient({
            datasources: {
                db: {
                    url,
                },
            },
        });
        await this.prisma.$connect();
    }
    getPrismaClient() {
        return this.prisma;
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PrismaService);


/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(4);
const auth_controller_1 = __webpack_require__(12);
const auth_service_1 = __webpack_require__(13);
const jwt_1 = __webpack_require__(14);
const constants_1 = __webpack_require__(16);
const response_message_1 = __webpack_require__(15);
const prisma_service_1 = __webpack_require__(9);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                global: true,
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '3600s' },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, response_message_1.ResponseService, prisma_service_1.PrismaService],
    })
], AuthModule);


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(4);
const auth_service_1 = __webpack_require__(13);
const database_guard_1 = __webpack_require__(8);
let AuthController = class AuthController {
    constructor(service) {
        this.service = service;
    }
    async login(data) {
        const { login, pass } = data;
        return this.service.signIn(login, pass);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AuthController.prototype, "login", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('login'),
    (0, common_1.UseGuards)(database_guard_1.DynamicDatabaseGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 13 */
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(4);
const jwt_1 = __webpack_require__(14);
const clients_1 = __webpack_require__(7);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
let AuthService = class AuthService {
    constructor(prismaService, jwtService, responseService) {
        this.prismaService = prismaService;
        this.jwtService = jwtService;
        this.responseService = responseService;
    }
    async signIn(login, pass) {
        const prisma = this.prismaService.getPrismaClient();
        const user = await prisma.users.findFirst({
            where: { login: login },
        });
        if (!user) {
            return this.responseService.error('Este usuário não existe');
        }
        const cliente = clients_1.configuracoes.database[global.CLIENTE_ID];
        global.SESSION = {
            id: user.id,
        };
        const payload = {
            sub: user.id,
            id: user.id,
            email: user.email,
            ativo: user.ativo,
            username: user.login,
            cliente_id: global.CLIENTE_ID,
            cliente: {
                database: cliente.database,
            },
        };
        return {
            session: await this.jwtService.signAsync(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof response_message_1.ResponseService !== "undefined" && response_message_1.ResponseService) === "function" ? _c : Object])
], AuthService);


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseService = void 0;
const common_1 = __webpack_require__(4);
let ResponseService = class ResponseService {
    success(data, message = 'Success') {
        return {
            status: common_1.HttpStatus.OK,
            message,
            data,
        };
    }
    error(title, err) {
        throw new common_1.HttpException({
            status: common_1.HttpStatus.BAD_REQUEST,
            error: title,
            message_erro: err,
        }, common_1.HttpStatus.BAD_REQUEST);
    }
};
exports.ResponseService = ResponseService;
exports.ResponseService = ResponseService = __decorate([
    (0, common_1.Injectable)()
], ResponseService);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.APIV1 = exports.jwtConstants = void 0;
exports.jwtConstants = {
    secret: '5bfca4a1474397f842accb61211ab197',
};
exports.APIV1 = '/api/v1/';


/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(4);
const prisma_service_1 = __webpack_require__(9);
const users_controller_1 = __webpack_require__(18);
const users_service_1 = __webpack_require__(19);
const response_message_1 = __webpack_require__(15);
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersController],
        providers: [prisma_service_1.PrismaService, users_service_1.UsersServices, response_message_1.ResponseService],
    })
], UsersModule);


/***/ }),
/* 18 */
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
exports.UsersController = void 0;
const common_1 = __webpack_require__(4);
const users_service_1 = __webpack_require__(19);
const auth_guards_1 = __webpack_require__(21);
const create_users_dto_1 = __webpack_require__(22);
const update_users_dto_1 = __webpack_require__(23);
let UsersController = class UsersController {
    constructor(services) {
        this.services = services;
    }
    async findAll() {
        return await this.services.findAll();
    }
    async find(id) {
        return await this.services.find(+id);
    }
    async create(data) {
        return this.services.create(data);
    }
    async update(data) {
        return this.services.update(data);
    }
    async remove(id) {
        return this.services.remove(+id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_users_dto_1.CreateUsersDTO !== "undefined" && create_users_dto_1.CreateUsersDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof update_users_dto_1.UpdateUsersDto !== "undefined" && update_users_dto_1.UpdateUsersDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('remove/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('/api/v1/users'),
    (0, common_1.UseGuards)(auth_guards_1.AuthAndDatabaseGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersServices !== "undefined" && users_service_1.UsersServices) === "function" ? _a : Object])
], UsersController);


/***/ }),
/* 19 */
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
exports.UsersServices = void 0;
const common_1 = __webpack_require__(4);
const prisma_service_1 = __webpack_require__(9);
const bcrypt_1 = __webpack_require__(20);
const response_message_1 = __webpack_require__(15);
let UsersServices = class UsersServices {
    constructor(db, responseService) {
        this.db = db;
        this.responseService = responseService;
    }
    findAll() {
        return this.db.users.findMany();
    }
    find(id) {
        return this.db.users.findFirst({
            where: { id: id },
        });
    }
    async create(data) {
        try {
            const { nome, login, senha, email, telefone } = data;
            const hashPassword = await (0, bcrypt_1.hash)(senha, 10);
            const user = await this.db.users.findFirst({
                where: { email: email },
            });
            if (user) {
                return this.responseService.error('Já existe um usuário com este e-mail!');
            }
            await this.db.users.create({
                data: {
                    nome: nome,
                    email: email,
                    login: login,
                    senha: hashPassword,
                    ativo: 'S',
                    telefone: telefone,
                },
            });
            return this.responseService.success({}, 'Usuário cadastrado com sucesso!');
        }
        catch (err) {
            return this.responseService.error('Erro', err);
        }
    }
    async update(data) {
        const { id, nome, email, telefone, ativo, login, senha } = data;
        const user = await this.db.users.findFirst({
            where: { email: email, id: id },
        });
        if (!user) {
            return this.responseService.error('Já existe um usuário com este e-mail!');
        }
        const newPasswordHash = await (0, bcrypt_1.hash)(senha, 10);
        await this.db.users.update({
            where: { id: id },
            data: {
                nome: nome,
                email: email,
                telefone: telefone,
                ativo: ativo,
                login: login,
                senha: newPasswordHash,
            },
        });
        return this.responseService.success({}, 'Registro Alterado com Sucesso!');
    }
    async remove(id) {
        const user = await this.db.users.findFirst({
            where: { id: id },
        });
        if (!user) {
            this.responseService.error('Este usuário não existe em nossa base de dados. Por favor entre em contato com operador do sistema!');
        }
        await this.db.users.delete({
            where: { id: id },
        });
        return this.responseService.success({}, 'Regristo excluído com sucesso!');
    }
};
exports.UsersServices = UsersServices;
exports.UsersServices = UsersServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof response_message_1.ResponseService !== "undefined" && response_message_1.ResponseService) === "function" ? _b : Object])
], UsersServices);


/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 21 */
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
const common_1 = __webpack_require__(4);
const jwt_1 = __webpack_require__(14);
const constants_1 = __webpack_require__(16);
const prisma_service_1 = __webpack_require__(9);
let AuthAndDatabaseGuard = class AuthAndDatabaseGuard {
    constructor(jwtService, prismaService) {
        this.jwtService = jwtService;
        this.prismaService = prismaService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException('Token não encontrado.');
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: constants_1.jwtConstants.secret,
            });
            request['user'] = payload;
        }
        catch {
            throw new common_1.UnauthorizedException('Token inválido.');
        }
        const client_id = request.headers['x-cliente-id'];
        const cliente = String(client_id);
        if (!cliente) {
            console.error('Cliente não fornecido nos parâmetros da solicitação.');
            throw new common_1.UnauthorizedException('Cliente ID não fornecido.');
        }
        try {
            await this.prismaService.setConnectionUrl(cliente);
            request.dbConnection = this.prismaService.getPrismaClient();
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
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _b : Object])
], AuthAndDatabaseGuard);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUsersDTO = void 0;
class CreateUsersDTO {
}
exports.CreateUsersDTO = CreateUsersDTO;


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUsersDto = void 0;
class UpdateUsersDto {
}
exports.UpdateUsersDto = UpdateUsersDto;


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnoMesModule = void 0;
const common_1 = __webpack_require__(4);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
const ano_mes_controller_1 = __webpack_require__(25);
const ano_mes_service_1 = __webpack_require__(26);
const app_util_1 = __webpack_require__(27);
let AnoMesModule = class AnoMesModule {
};
exports.AnoMesModule = AnoMesModule;
exports.AnoMesModule = AnoMesModule = __decorate([
    (0, common_1.Module)({
        controllers: [ano_mes_controller_1.AnoMesController],
        providers: [prisma_service_1.PrismaService, response_message_1.ResponseService, ano_mes_service_1.AnoMesService, app_util_1.AppUtil],
    })
], AnoMesModule);


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnoMesController = void 0;
const common_1 = __webpack_require__(4);
const ano_mes_service_1 = __webpack_require__(26);
const create_ano_mes_dto_1 = __webpack_require__(28);
let AnoMesController = class AnoMesController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    find(id) {
        return this.service.find(+id);
    }
    create(data) {
        return this.service.create(data);
    }
    remove(id) {
        return this.service.remove(+id);
    }
};
exports.AnoMesController = AnoMesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnoMesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AnoMesController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_ano_mes_dto_1.CreateAnoMesDTO !== "undefined" && create_ano_mes_dto_1.CreateAnoMesDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AnoMesController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('remove/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AnoMesController.prototype, "remove", null);
exports.AnoMesController = AnoMesController = __decorate([
    (0, common_1.Controller)('api/v1/ano-mes'),
    __metadata("design:paramtypes", [typeof (_a = typeof ano_mes_service_1.AnoMesService !== "undefined" && ano_mes_service_1.AnoMesService) === "function" ? _a : Object])
], AnoMesController);


/***/ }),
/* 26 */
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnoMesService = void 0;
const common_1 = __webpack_require__(4);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
const app_util_1 = __webpack_require__(27);
let AnoMesService = class AnoMesService {
    constructor(db, responseService, appUtil) {
        this.db = db;
        this.responseService = responseService;
        this.appUtil = appUtil;
    }
    async findAll() {
        const sql = await this.db.anoMes.findMany();
        const data = [];
        sql.forEach((item) => {
            data.push({
                id: item.id,
                ano: item.ano,
                mes: this.appUtil.formatarMes(item.mes),
            });
        });
        return data;
    }
    async find(id) {
        const sql = await this.db.anoMes.findFirst({
            where: { id: id },
        });
        const formattedMonth = this.appUtil.formatarMes(sql.mes);
        const data = {
            ...sql,
            mes: formattedMonth,
        };
        return data;
    }
    async create(data) {
        const exists = await this.db.anoMes.findFirst({
            where: {
                ano: data.ano,
                mes: data.mes,
            },
        });
        if (exists) {
            this.responseService.error(`Jà existe este mesmo ano ${data.ano} e este mesmo mês ${this.appUtil.formatarMes(data.mes)} cadastado!`);
        }
        await this.db.anoMes.create({
            data: {
                ano: data.ano,
                mes: data.mes,
            },
        });
        return this.responseService.success({}, 'Registrado criado com sucesso!');
    }
    async remove(id) {
        const exits = await this.db.anoMes.findFirst({
            where: { id: id },
        });
        if (!exits) {
            return this.responseService.error('Este registro não existe!');
        }
        await this.db.anoMes.delete({
            where: {
                id: id,
            },
        });
        return this.responseService.success({}, 'Registro excluído com sucesso!');
    }
};
exports.AnoMesService = AnoMesService;
exports.AnoMesService = AnoMesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof response_message_1.ResponseService !== "undefined" && response_message_1.ResponseService) === "function" ? _b : Object, typeof (_c = typeof app_util_1.AppUtil !== "undefined" && app_util_1.AppUtil) === "function" ? _c : Object])
], AnoMesService);


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
exports.AppUtil = void 0;
const common_1 = __webpack_require__(4);
let AppUtil = class AppUtil {
    formatarMes(mes) {
        switch (mes) {
            case '1':
                return 'Janeiro';
            case '2':
                return 'Fevereiro';
            case '3':
                return 'Março';
            case '4':
                return 'Abril';
            case '5':
                return 'Maio';
            case '6':
                return 'Junho';
            case '7':
                return 'Julho';
            case '8':
                return 'Agosto';
            case '9':
                return 'Setembro';
            case '10':
                return 'Outubro';
            case '11':
                return 'Novembro';
            case '12':
                return 'Dezembro';
            default:
                return 'Mês inválido';
        }
    }
    clearMask(value) {
        return value?.replace(/\D/g, '');
    }
};
exports.AppUtil = AppUtil;
exports.AppUtil = AppUtil = __decorate([
    (0, common_1.Injectable)()
], AppUtil);


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAnoMesDTO = void 0;
class CreateAnoMesDTO {
}
exports.CreateAnoMesDTO = CreateAnoMesDTO;


/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SalasModule = void 0;
const common_1 = __webpack_require__(4);
const salas_service_1 = __webpack_require__(30);
const salas_controller_1 = __webpack_require__(31);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
let SalasModule = class SalasModule {
};
exports.SalasModule = SalasModule;
exports.SalasModule = SalasModule = __decorate([
    (0, common_1.Module)({
        controllers: [salas_controller_1.SalasController],
        providers: [salas_service_1.SalasServices, prisma_service_1.PrismaService, response_message_1.ResponseService],
    })
], SalasModule);


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
exports.SalasServices = void 0;
const common_1 = __webpack_require__(4);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
let SalasServices = class SalasServices {
    constructor(db, responseService) {
        this.db = db;
        this.responseService = responseService;
    }
    async findAll() {
        return this.db.salas.findMany();
    }
    async find(id) {
        return this.db.salas.findFirst({
            where: { id: id },
        });
    }
    async create(data) {
        try {
            await this.db.salas.create({
                data: {
                    descricao: data.descricao.toUpperCase(),
                    criado_por: global.SESSION.id,
                },
            });
            return this.responseService.success({}, 'Registro criado com sucesso!');
        }
        catch (error) {
            this.responseService.error('Erro ao tentar criar a sala', error);
        }
    }
    async update(data) {
        try {
            const exists = await this.db.salas.findFirst({
                where: { id: data.id },
            });
            if (!exists) {
                return this.responseService.error('Este registro não existe!');
            }
            await this.db.salas.update({
                where: { id: data.id },
                data: {
                    descricao: data.descricao,
                    alterado_por: global.SESSION.id,
                    alterado_em: new Date(),
                },
            });
            return this.responseService.success({}, 'Registro atualizado com sucesso!');
        }
        catch (error) {
            this.responseService.error('Erro ao tentar atualizar a sala', error);
        }
    }
    async remove(id) {
        try {
            await this.db.salas.delete({
                where: { id: id },
            });
            return this.responseService.success({}, 'Registro excluído com sucesso!');
        }
        catch (error) {
            this.responseService.error('Erro ao tentar excluir a sala', error);
        }
    }
};
exports.SalasServices = SalasServices;
exports.SalasServices = SalasServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof response_message_1.ResponseService !== "undefined" && response_message_1.ResponseService) === "function" ? _b : Object])
], SalasServices);


/***/ }),
/* 31 */
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
exports.SalasController = void 0;
const common_1 = __webpack_require__(4);
const salas_service_1 = __webpack_require__(30);
const auth_guards_1 = __webpack_require__(21);
const update_salas_dto_1 = __webpack_require__(32);
const create_salas_dto_1 = __webpack_require__(33);
const session_decorator_1 = __webpack_require__(34);
let SalasController = class SalasController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    find(id) {
        return this.service.find(+id);
    }
    create(data) {
        return this.service.create(data);
    }
    update(data) {
        return this.service.update(data);
    }
    remove(id) {
        return this.service.remove(+id);
    }
};
exports.SalasController = SalasController;
__decorate([
    (0, common_1.Get)(),
    (0, session_decorator_1.Session)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SalasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SalasController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    (0, session_decorator_1.Session)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_salas_dto_1.CreateSalasDTO !== "undefined" && create_salas_dto_1.CreateSalasDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], SalasController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    (0, session_decorator_1.Session)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof update_salas_dto_1.UpdateSalasDTO !== "undefined" && update_salas_dto_1.UpdateSalasDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], SalasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('remove/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SalasController.prototype, "remove", null);
exports.SalasController = SalasController = __decorate([
    (0, common_1.Controller)('api/v1/salas'),
    (0, common_1.UseGuards)(auth_guards_1.AuthAndDatabaseGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof salas_service_1.SalasServices !== "undefined" && salas_service_1.SalasServices) === "function" ? _a : Object])
], SalasController);


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSalasDTO = void 0;
class UpdateSalasDTO {
}
exports.UpdateSalasDTO = UpdateSalasDTO;


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateSalasDTO = void 0;
class CreateSalasDTO {
}
exports.CreateSalasDTO = CreateSalasDTO;


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetSession = exports.Session = exports.SESSION_KEY = void 0;
const common_1 = __webpack_require__(4);
exports.SESSION_KEY = 'session';
const Session = () => (0, common_1.SetMetadata)(exports.SESSION_KEY, true);
exports.Session = Session;
exports.GetSession = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.session;
});


/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArmarioModule = void 0;
const common_1 = __webpack_require__(4);
const armario_controller_1 = __webpack_require__(36);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
const armario_service_1 = __webpack_require__(37);
let ArmarioModule = class ArmarioModule {
};
exports.ArmarioModule = ArmarioModule;
exports.ArmarioModule = ArmarioModule = __decorate([
    (0, common_1.Module)({
        controllers: [armario_controller_1.ArmarioController],
        providers: [prisma_service_1.PrismaService, response_message_1.ResponseService, armario_service_1.ArmarioService],
    })
], ArmarioModule);


/***/ }),
/* 36 */
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
exports.ArmarioController = void 0;
const common_1 = __webpack_require__(4);
const auth_guards_1 = __webpack_require__(21);
const armario_service_1 = __webpack_require__(37);
const create_armario_dto_1 = __webpack_require__(38);
const update_armario_dto_1 = __webpack_require__(39);
const session_decorator_1 = __webpack_require__(34);
let ArmarioController = class ArmarioController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    find(id) {
        return this.service.find(+id);
    }
    create(data) {
        return this.service.create(data);
    }
    update(data) {
        return this.service.update(data);
    }
    remove(id) {
        return this.service.remove(+id);
    }
};
exports.ArmarioController = ArmarioController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArmarioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArmarioController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    (0, session_decorator_1.Session)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_armario_dto_1.CreateArmaroDTO !== "undefined" && create_armario_dto_1.CreateArmaroDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ArmarioController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    (0, session_decorator_1.Session)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof update_armario_dto_1.UpdateArmarioDTO !== "undefined" && update_armario_dto_1.UpdateArmarioDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ArmarioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArmarioController.prototype, "remove", null);
exports.ArmarioController = ArmarioController = __decorate([
    (0, common_1.Controller)('api/v1/armario'),
    (0, common_1.UseGuards)(auth_guards_1.AuthAndDatabaseGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof armario_service_1.ArmarioService !== "undefined" && armario_service_1.ArmarioService) === "function" ? _a : Object])
], ArmarioController);


/***/ }),
/* 37 */
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
exports.ArmarioService = void 0;
const common_1 = __webpack_require__(4);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
let ArmarioService = class ArmarioService {
    constructor(db, responseService) {
        this.db = db;
        this.responseService = responseService;
    }
    async findAll() {
        const armarios = await this.db.armario.findMany({
            select: {
                id: true,
                descricao: true,
                criado_por: true,
                alterado_em: true,
                criado_em: true,
                alterado_por: true,
                salas: {
                    select: {
                        id: true,
                        descricao: true,
                    },
                },
            },
        });
        return armarios;
    }
    async find(id) {
        const armario = await this.db.armario.findFirst({
            where: { id: id },
            select: {
                id: true,
                descricao: true,
                criado_por: true,
                alterado_em: true,
                criado_em: true,
                alterado_por: true,
                salas: {
                    select: {
                        id: true,
                        descricao: true,
                    },
                },
            },
        });
        if (!armario) {
            this.responseService.error('Este registro não existe!');
        }
        return armario;
    }
    async create(data) {
        await this.db.armario.create({
            data: {
                descricao: data.descricao,
                salas_id: data.sala_id,
                criado_por: global.SESSION.id,
            },
        });
        return this.responseService.success({}, 'Registro criado com Sucesso!');
    }
    async update(data) {
        const { id, descricao } = data;
        const armario = await this.db.armario.findFirst({
            where: { id: id },
        });
        if (!armario) {
            this.responseService.error('Este registro não existe!');
        }
        await this.db.armario.update({
            where: { id: id },
            data: {
                descricao: descricao,
                alterado_por: global.SESSION.id,
                alterado_em: new Date(),
            },
        });
        return this.responseService.success({}, 'Registro Alterado com Sucesso!');
    }
    async remove(id) {
        const armario = await this.db.armario.findFirst({
            where: { id: id },
        });
        if (!armario) {
            this.responseService.error('Este registro não existe!');
        }
        await this.db.armario.delete({
            where: { id: id },
        });
        return this.responseService.success({}, 'Registro excluído com Sucesso!');
    }
};
exports.ArmarioService = ArmarioService;
exports.ArmarioService = ArmarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof response_message_1.ResponseService !== "undefined" && response_message_1.ResponseService) === "function" ? _b : Object])
], ArmarioService);


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateArmaroDTO = void 0;
class CreateArmaroDTO {
}
exports.CreateArmaroDTO = CreateArmaroDTO;


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateArmarioDTO = void 0;
class UpdateArmarioDTO {
}
exports.UpdateArmarioDTO = UpdateArmarioDTO;


/***/ }),
/* 40 */
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
exports.SessionInterceptor = void 0;
const common_1 = __webpack_require__(4);
const core_1 = __webpack_require__(1);
const session_decorator_1 = __webpack_require__(34);
const jwt = __webpack_require__(41);
let SessionInterceptor = class SessionInterceptor {
    constructor(reflector) {
        this.reflector = reflector;
    }
    intercept(context, next) {
        const isSessionEnabled = this.reflector.get(session_decorator_1.SESSION_KEY, context.getHandler());
        if (isSessionEnabled) {
            const request = context.switchToHttp().getRequest();
            const authHeader = request.headers['authorization'];
            if (authHeader) {
                const token = authHeader.replace('Bearer ', '');
                try {
                    const decoded = jwt.decode(token, { complete: true });
                    request.sessionContext = decoded?.payload || {};
                    global.SESSION = decoded?.payload;
                }
                catch (err) {
                    console.error(err);
                }
            }
            else {
                request.sessionContext = {};
            }
        }
        return next.handle();
    }
};
exports.SessionInterceptor = SessionInterceptor;
exports.SessionInterceptor = SessionInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], SessionInterceptor);


/***/ }),
/* 41 */
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CredoresModule = void 0;
const common_1 = __webpack_require__(4);
const credores_controller_1 = __webpack_require__(43);
const credores_service_1 = __webpack_require__(44);
const response_message_1 = __webpack_require__(15);
const prisma_service_1 = __webpack_require__(9);
const app_util_1 = __webpack_require__(27);
let CredoresModule = class CredoresModule {
};
exports.CredoresModule = CredoresModule;
exports.CredoresModule = CredoresModule = __decorate([
    (0, common_1.Module)({
        controllers: [credores_controller_1.CredoresController],
        providers: [prisma_service_1.PrismaService, response_message_1.ResponseService, credores_service_1.CredoresService, app_util_1.AppUtil],
    })
], CredoresModule);


/***/ }),
/* 43 */
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
exports.CredoresController = void 0;
const common_1 = __webpack_require__(4);
const auth_guards_1 = __webpack_require__(21);
const credores_service_1 = __webpack_require__(44);
const create_credor_dto_1 = __webpack_require__(45);
const session_decorator_1 = __webpack_require__(34);
const update_credor_dto_1 = __webpack_require__(46);
let CredoresController = class CredoresController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    find(id) {
        return this.service.find(+id);
    }
    create(data) {
        return this.service.create(data);
    }
    update(data) {
        return this.service.update(data);
    }
    remove(id) {
        return this.service.remove(+id);
    }
};
exports.CredoresController = CredoresController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CredoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CredoresController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    (0, session_decorator_1.Session)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_credor_dto_1.CreateCredorDTO !== "undefined" && create_credor_dto_1.CreateCredorDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CredoresController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    (0, session_decorator_1.Session)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof update_credor_dto_1.UpdateCredorDTO !== "undefined" && update_credor_dto_1.UpdateCredorDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CredoresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, session_decorator_1.Session)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CredoresController.prototype, "remove", null);
exports.CredoresController = CredoresController = __decorate([
    (0, common_1.Controller)('api/v1/credores'),
    (0, common_1.UseGuards)(auth_guards_1.AuthAndDatabaseGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof credores_service_1.CredoresService !== "undefined" && credores_service_1.CredoresService) === "function" ? _a : Object])
], CredoresController);


/***/ }),
/* 44 */
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CredoresService = void 0;
const common_1 = __webpack_require__(4);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
const app_util_1 = __webpack_require__(27);
let CredoresService = class CredoresService {
    constructor(db, responseService, appUtil) {
        this.db = db;
        this.responseService = responseService;
        this.appUtil = appUtil;
    }
    async findAll() {
        const credores = await this.db.credores.findMany();
        return credores;
    }
    async find(id) {
        const credor = await this.db.credores.findFirst({
            where: { id: id },
        });
        if (!credor) {
            this.responseService.error('Credor não encontrado');
            return;
        }
        return credor;
    }
    async create(data) {
        const { agencia, banco, cep, cidade, conta, cpf, email, logradouro, nome, numero, observacoes, telefone, telefone_complementar, tipo_documento, } = data;
        const cpfClear = this.appUtil.clearMask(cpf);
        const telefoneClear = this.appUtil.clearMask(telefone);
        const telefoneComplementarClear = this.appUtil.clearMask(telefone_complementar);
        const cepClear = this.appUtil.clearMask(cep);
        await this.db.credores.create({
            data: {
                agencia,
                banco,
                cep: cepClear,
                cidade,
                conta,
                cpf: cpfClear,
                email,
                logradouro,
                nome,
                numero,
                observacoes,
                telefone: telefoneClear,
                telefone_complementar: telefoneComplementarClear,
                tipo_documento,
                criado_por: global.SESSION.id,
            },
        });
        return this.responseService.success({}, 'Registro criado com Sucesso');
    }
    async update(data) {
        const { id, agencia, banco, cep, cidade, conta, cpf, email, logradouro, nome, numero, observacoes, telefone, telefone_complementar, tipo_documento, } = data;
        const cpfClear = this.appUtil.clearMask(cpf);
        const telefoneClear = this.appUtil.clearMask(telefone);
        const telefoneComplementarClear = this.appUtil.clearMask(telefone_complementar);
        const cepClear = this.appUtil.clearMask(cep);
        await this.db.credores.update({
            where: { id: id },
            data: {
                agencia,
                banco,
                cep: cepClear,
                cidade,
                conta,
                cpf: cpfClear,
                email,
                logradouro,
                nome,
                numero,
                observacoes,
                telefone: telefoneClear,
                telefone_complementar: telefoneComplementarClear,
                tipo_documento,
                alterado_por: global.SESSION.id,
                alterado_em: new Date(),
            },
        });
        return this.responseService.success({}, 'Registro Alterado com Sucesso');
    }
    async remove(id) {
        await this.db.credores.delete({
            where: { id: id },
        });
        return this.responseService.success({}, 'Registro Excluído com Sucesso');
    }
};
exports.CredoresService = CredoresService;
exports.CredoresService = CredoresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof response_message_1.ResponseService !== "undefined" && response_message_1.ResponseService) === "function" ? _b : Object, typeof (_c = typeof app_util_1.AppUtil !== "undefined" && app_util_1.AppUtil) === "function" ? _c : Object])
], CredoresService);


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCredorDTO = void 0;
class CreateCredorDTO {
}
exports.CreateCredorDTO = CreateCredorDTO;


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCredorDTO = void 0;
class UpdateCredorDTO {
}
exports.UpdateCredorDTO = UpdateCredorDTO;


/***/ }),
/* 47 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrgaosModule = void 0;
const common_1 = __webpack_require__(4);
const orgaos_controller_1 = __webpack_require__(48);
const prisma_service_1 = __webpack_require__(9);
const orgaos_service_1 = __webpack_require__(49);
const response_message_1 = __webpack_require__(15);
const app_util_1 = __webpack_require__(27);
let OrgaosModule = class OrgaosModule {
};
exports.OrgaosModule = OrgaosModule;
exports.OrgaosModule = OrgaosModule = __decorate([
    (0, common_1.Module)({
        controllers: [orgaos_controller_1.OrgaosController],
        providers: [prisma_service_1.PrismaService, orgaos_service_1.OrgaosService, response_message_1.ResponseService, app_util_1.AppUtil],
    })
], OrgaosModule);


/***/ }),
/* 48 */
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
exports.OrgaosController = void 0;
const common_1 = __webpack_require__(4);
const orgaos_service_1 = __webpack_require__(49);
const create_orgao_dto_1 = __webpack_require__(51);
const session_decorator_1 = __webpack_require__(34);
const update_orgao_dto_1 = __webpack_require__(53);
const validation_pipe_1 = __webpack_require__(54);
let OrgaosController = class OrgaosController {
    constructor(orgaoService) {
        this.orgaoService = orgaoService;
    }
    findAll() {
        return this.orgaoService.findAll();
    }
    create(data) {
        return this.orgaoService.create(data);
    }
    update(data) {
        return this.orgaoService.update(data);
    }
    remove(id) {
        return this.orgaoService.remove(+id);
    }
};
exports.OrgaosController = OrgaosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrgaosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, session_decorator_1.Session)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_orgao_dto_1.CreateOrgaosDTO !== "undefined" && create_orgao_dto_1.CreateOrgaosDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], OrgaosController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    (0, session_decorator_1.Session)(),
    __param(0, (0, common_1.Body)(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof update_orgao_dto_1.UpdateOrgaosDTO !== "undefined" && update_orgao_dto_1.UpdateOrgaosDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], OrgaosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrgaosController.prototype, "remove", null);
exports.OrgaosController = OrgaosController = __decorate([
    (0, common_1.Controller)('api/v1/orgaos'),
    __metadata("design:paramtypes", [typeof (_a = typeof orgaos_service_1.OrgaosService !== "undefined" && orgaos_service_1.OrgaosService) === "function" ? _a : Object])
], OrgaosController);


/***/ }),
/* 49 */
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrgaosService = void 0;
const common_1 = __webpack_require__(4);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
const app_util_1 = __webpack_require__(27);
const db_services_1 = __webpack_require__(50);
let OrgaosService = class OrgaosService {
    constructor(db, responseService, appUtil) {
        this.db = db;
        this.responseService = responseService;
        this.appUtil = appUtil;
    }
    async findAll() {
        return this.db.orgaos.findMany();
    }
    async find(id) {
        return this.db.orgaos.findFirst({
            where: { id: id },
        });
    }
    async create(data) {
        try {
            const cpf = this.appUtil.clearMask(data.cpf);
            await this.db.orgaos.create({
                data: {
                    sigla: data.sigla.toUpperCase(),
                    cpf: cpf,
                    responsavel: data.responsavel.toUpperCase(),
                    num_expediente: data.num_expediente,
                    descricao: data.descricao.toUpperCase(),
                    criado_por: global.SESSION.id,
                },
            });
            return this.responseService.success({}, 'Regiostro Criado com Sucesso!');
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async update(data) {
        await (0, db_services_1.Already)('orgaos', data.id);
        const cpf = this.appUtil.clearMask(data.cpf);
        await this.db.orgaos.update({
            where: { id: data.id },
            data: {
                sigla: data.sigla.toUpperCase(),
                cpf: cpf,
                responsavel: data.responsavel.toUpperCase(),
                num_expediente: data.num_expediente,
                descricao: data.descricao.toUpperCase(),
                alterado_por: global.SESSION.id,
                alterado_em: new Date(),
            },
        });
        return this.responseService.success({}, 'Regiostro Alterado com Sucesso!');
    }
    async remove(id) {
        await (0, db_services_1.Already)('orgaos', id);
        await this.db.orgaos.delete({
            where: { id: id },
        });
        return this.responseService.success({}, 'Regiostro Excluído com Sucesso!');
    }
};
exports.OrgaosService = OrgaosService;
exports.OrgaosService = OrgaosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof response_message_1.ResponseService !== "undefined" && response_message_1.ResponseService) === "function" ? _b : Object, typeof (_c = typeof app_util_1.AppUtil !== "undefined" && app_util_1.AppUtil) === "function" ? _c : Object])
], OrgaosService);


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Already = void 0;
const client_1 = __webpack_require__(10);
const response_message_1 = __webpack_require__(15);
const prisma = new client_1.PrismaClient();
const responseService = new response_message_1.ResponseService();
const Already = async (db, id, title = 'Não existe nenhum registro com este código!') => {
    const model = prisma[db];
    const record = await model.findUnique({
        where: { id },
    });
    if (!record || record === null) {
        return responseService.error(title);
    }
};
exports.Already = Already;


/***/ }),
/* 51 */
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
exports.CreateOrgaosDTO = void 0;
const class_validator_1 = __webpack_require__(52);
class CreateOrgaosDTO {
}
exports.CreateOrgaosDTO = CreateOrgaosDTO;
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Este campo só pode ser texto',
    }),
    __metadata("design:type", String)
], CreateOrgaosDTO.prototype, "sigla", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Este campo só pode ser texto',
    }),
    __metadata("design:type", String)
], CreateOrgaosDTO.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Este campo só pode ser texto',
    }),
    __metadata("design:type", String)
], CreateOrgaosDTO.prototype, "cpf", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Este campo só pode ser texto',
    }),
    __metadata("design:type", String)
], CreateOrgaosDTO.prototype, "responsavel", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrgaosDTO.prototype, "num_expediente", void 0);


/***/ }),
/* 52 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateOrgaosDTO = void 0;
class UpdateOrgaosDTO {
}
exports.UpdateOrgaosDTO = UpdateOrgaosDTO;


/***/ }),
/* 54 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationPipe = void 0;
const common_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(52);
const class_transformer_1 = __webpack_require__(55);
let ValidationPipe = class ValidationPipe {
    async transform(value, { metatype }) {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = (0, class_transformer_1.plainToInstance)(metatype, value);
        const errors = await (0, class_validator_1.validate)(object);
        if (errors.length > 0) {
            throw new common_1.BadRequestException(this.formatErrors(errors));
        }
        return value;
    }
    toValidate(metatype) {
        const types = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
    formatErrors(errors) {
        return errors.map((err) => {
            return {
                constraints: err.constraints,
            };
        });
    }
};
exports.ValidationPipe = ValidationPipe;
exports.ValidationPipe = ValidationPipe = __decorate([
    (0, common_1.Injectable)()
], ValidationPipe);


/***/ }),
/* 55 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 56 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CaixasModule = void 0;
const common_1 = __webpack_require__(4);
const caixas_controller_1 = __webpack_require__(57);
const caixas_service_1 = __webpack_require__(58);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
let CaixasModule = class CaixasModule {
};
exports.CaixasModule = CaixasModule;
exports.CaixasModule = CaixasModule = __decorate([
    (0, common_1.Module)({
        controllers: [caixas_controller_1.CaixasController],
        providers: [caixas_service_1.CaixasServices, prisma_service_1.PrismaService, response_message_1.ResponseService],
    })
], CaixasModule);


/***/ }),
/* 57 */
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
exports.CaixasController = void 0;
const common_1 = __webpack_require__(4);
const caixas_service_1 = __webpack_require__(58);
const create_caixas_dto_1 = __webpack_require__(59);
const update_caixas_dto_1 = __webpack_require__(60);
let CaixasController = class CaixasController {
    constructor(services) {
        this.services = services;
    }
    findAll() {
        return this.services.findAll();
    }
    find(id) {
        return this.services.find(+id);
    }
    create(data) {
        return this.services.create(data);
    }
    update(data) {
        return this.services.update(data);
    }
    remove(id) {
        return this.services.remove(+id);
    }
};
exports.CaixasController = CaixasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CaixasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CaixasController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_caixas_dto_1.CreateCaixasDTO !== "undefined" && create_caixas_dto_1.CreateCaixasDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CaixasController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof update_caixas_dto_1.UpdateCaixasDTO !== "undefined" && update_caixas_dto_1.UpdateCaixasDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CaixasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CaixasController.prototype, "remove", null);
exports.CaixasController = CaixasController = __decorate([
    (0, common_1.Controller)('api/v1/caixas'),
    __metadata("design:paramtypes", [typeof (_a = typeof caixas_service_1.CaixasServices !== "undefined" && caixas_service_1.CaixasServices) === "function" ? _a : Object])
], CaixasController);


/***/ }),
/* 58 */
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
exports.CaixasServices = void 0;
const common_1 = __webpack_require__(4);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
let CaixasServices = class CaixasServices {
    constructor(db, responseService) {
        this.db = db;
        this.responseService = responseService;
    }
    findAll() {
        return this.db.caixas.findMany();
    }
    find(id) {
        return this.db.caixas.findFirst({
            where: { id: id },
        });
    }
    async create(data) {
        try {
            await this.db.caixas.create({
                data: {
                    descricao: data.descricao.toUpperCase(),
                    criado_por: global.SESSION.id,
                },
            });
            this.responseService.success({}, 'Registro Criado com sucesso');
        }
        catch (error) {
            this.responseService.error('Não foi possível criar a caixa', error);
        }
    }
    async update(data) {
        try {
            await this.db.caixas.update({
                where: { id: data.id },
                data: {
                    descricao: data.descricao.toUpperCase(),
                    alterado_por: global.SESSION.id,
                    alterado_em: new Date(),
                },
            });
            this.responseService.success({}, 'Registro Atualizado com sucesso');
        }
        catch (error) {
            this.responseService.error('Não foi possível atualizar a caixa', error);
        }
    }
    async remove(id) {
        await this.db.caixas.delete({
            where: { id: id },
        });
        this.responseService.success({}, 'Registro Excluído com Sucesso');
    }
};
exports.CaixasServices = CaixasServices;
exports.CaixasServices = CaixasServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof response_message_1.ResponseService !== "undefined" && response_message_1.ResponseService) === "function" ? _b : Object])
], CaixasServices);


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCaixasDTO = void 0;
class CreateCaixasDTO {
}
exports.CreateCaixasDTO = CreateCaixasDTO;


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCaixasDTO = void 0;
class UpdateCaixasDTO {
}
exports.UpdateCaixasDTO = UpdateCaixasDTO;


/***/ }),
/* 61 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrateleiraModule = void 0;
const common_1 = __webpack_require__(4);
const prateleira_controller_1 = __webpack_require__(62);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
const prateleira_service_1 = __webpack_require__(63);
let PrateleiraModule = class PrateleiraModule {
};
exports.PrateleiraModule = PrateleiraModule;
exports.PrateleiraModule = PrateleiraModule = __decorate([
    (0, common_1.Module)({
        controllers: [prateleira_controller_1.PrateleiraController],
        providers: [prateleira_service_1.PrateleiraService, prisma_service_1.PrismaService, response_message_1.ResponseService],
    })
], PrateleiraModule);


/***/ }),
/* 62 */
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
exports.PrateleiraController = void 0;
const common_1 = __webpack_require__(4);
const prateleira_service_1 = __webpack_require__(63);
const create_prateleira_dto_1 = __webpack_require__(64);
const update_prateleira_dto_1 = __webpack_require__(65);
const session_decorator_1 = __webpack_require__(34);
let PrateleiraController = class PrateleiraController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.find(+id);
    }
    create(data) {
        return this.service.create(data);
    }
    update(data) {
        return this.service.update(data);
    }
    remove(id) {
        return this.service.remove(+id);
    }
};
exports.PrateleiraController = PrateleiraController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrateleiraController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PrateleiraController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, session_decorator_1.Session)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_prateleira_dto_1.CreatePrateleiraDTO !== "undefined" && create_prateleira_dto_1.CreatePrateleiraDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], PrateleiraController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    (0, session_decorator_1.Session)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof update_prateleira_dto_1.UpdatePrateleiraDTO !== "undefined" && update_prateleira_dto_1.UpdatePrateleiraDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], PrateleiraController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PrateleiraController.prototype, "remove", null);
exports.PrateleiraController = PrateleiraController = __decorate([
    (0, common_1.Controller)('api/v1/prateleira'),
    __metadata("design:paramtypes", [typeof (_a = typeof prateleira_service_1.PrateleiraService !== "undefined" && prateleira_service_1.PrateleiraService) === "function" ? _a : Object])
], PrateleiraController);


/***/ }),
/* 63 */
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
exports.PrateleiraService = void 0;
const common_1 = __webpack_require__(4);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
let PrateleiraService = class PrateleiraService {
    constructor(db, responseService) {
        this.db = db;
        this.responseService = responseService;
    }
    findAll() {
        return this.db.prateleira.findMany();
    }
    find(id) {
        return this.db.prateleira.findFirst({
            where: { id: id },
        });
    }
    async create(data) {
        try {
            await this.db.prateleira.create({
                data: {
                    descricao: data.descricao.toUpperCase(),
                    criado_por: global.SESSION.id,
                },
            });
            this.responseService.success({}, 'Registro Criado com sucesso!');
        }
        catch (err) {
            this.responseService.error('Erro ao tentar criar a prateleira', err);
        }
    }
    async update(data) {
        try {
            await this.db.prateleira.update({
                where: { id: data.id },
                data: {
                    descricao: data.descricao.toUpperCase(),
                    alterado_por: global.SESSION.id,
                    alterado_em: new Date(),
                },
            });
            this.responseService.success({}, 'Registro Alterado com sucesso!');
        }
        catch (err) {
            this.responseService.error('Erro ao tentar criar a prateleira', err);
        }
    }
    remove(id) {
        this.db.prateleira.delete({
            where: { id: id },
        });
        this.responseService.success({}, 'Registro Excluído com Sucesso!');
    }
};
exports.PrateleiraService = PrateleiraService;
exports.PrateleiraService = PrateleiraService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof response_message_1.ResponseService !== "undefined" && response_message_1.ResponseService) === "function" ? _b : Object])
], PrateleiraService);


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePrateleiraDTO = void 0;
class CreatePrateleiraDTO {
}
exports.CreatePrateleiraDTO = CreatePrateleiraDTO;


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePrateleiraDTO = void 0;
class UpdatePrateleiraDTO {
}
exports.UpdatePrateleiraDTO = UpdatePrateleiraDTO;


/***/ }),
/* 66 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContasExtrasModule = void 0;
const common_1 = __webpack_require__(4);
const contas_extras_controller_1 = __webpack_require__(67);
const contas_extras_service_1 = __webpack_require__(68);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
let ContasExtrasModule = class ContasExtrasModule {
};
exports.ContasExtrasModule = ContasExtrasModule;
exports.ContasExtrasModule = ContasExtrasModule = __decorate([
    (0, common_1.Module)({
        controllers: [contas_extras_controller_1.ContasExtrasController],
        providers: [contas_extras_service_1.ContasExtrasService, prisma_service_1.PrismaService, response_message_1.ResponseService],
    })
], ContasExtrasModule);


/***/ }),
/* 67 */
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
exports.ContasExtrasController = void 0;
const common_1 = __webpack_require__(4);
const contas_extras_service_1 = __webpack_require__(68);
const create_conta_dto_1 = __webpack_require__(69);
const update_conta_dto_1 = __webpack_require__(70);
const session_decorator_1 = __webpack_require__(34);
let ContasExtrasController = class ContasExtrasController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.find(+id);
    }
    create(data) {
        return this.service.create(data);
    }
    update(data) {
        return this.service.update(data);
    }
    remove(id) {
        return this.service.remove(+id);
    }
};
exports.ContasExtrasController = ContasExtrasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContasExtrasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ContasExtrasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, session_decorator_1.Session)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_conta_dto_1.CreateContaDTO !== "undefined" && create_conta_dto_1.CreateContaDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ContasExtrasController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    (0, session_decorator_1.Session)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof update_conta_dto_1.UpdateContaDTO !== "undefined" && update_conta_dto_1.UpdateContaDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ContasExtrasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ContasExtrasController.prototype, "remove", null);
exports.ContasExtrasController = ContasExtrasController = __decorate([
    (0, common_1.Controller)('api/v1/conta-extra'),
    __metadata("design:paramtypes", [typeof (_a = typeof contas_extras_service_1.ContasExtrasService !== "undefined" && contas_extras_service_1.ContasExtrasService) === "function" ? _a : Object])
], ContasExtrasController);


/***/ }),
/* 68 */
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
exports.ContasExtrasService = void 0;
const common_1 = __webpack_require__(4);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
let ContasExtrasService = class ContasExtrasService {
    constructor(db, responseService) {
        this.db = db;
        this.responseService = responseService;
    }
    findAll() {
        return this.db.contasExtras.findMany();
    }
    find(id) {
        return this.db.contasExtras.findFirst({
            where: { id: id },
        });
    }
    async create(data) {
        try {
            await this.db.contasExtras.create({
                data: {
                    descricao: data.descricao.toUpperCase(),
                    codigo: data.codigo,
                    exercicio: data.exercicio,
                    orcamento: data.orcamento,
                    criado_por: global.SESSION.id,
                },
            });
            this.responseService.success({}, 'Registro Criado com sucesso!');
        }
        catch (err) {
            this.responseService.error('Erro', err);
        }
    }
    async update(data) {
        try {
            await this.db.contasExtras.update({
                where: { id: data.id },
                data: {
                    descricao: data.descricao.toUpperCase(),
                    codigo: data.codigo,
                    exercicio: data.exercicio,
                    orcamento: data.orcamento,
                    alterado_por: global.SESSION.id,
                    alterado_em: new Date(),
                },
            });
        }
        catch (err) {
            this.responseService.error('Erro', err);
        }
    }
    async remove(id) {
        await this.db.contasExtras.delete({ where: { id: id } });
        this.responseService.success({}, 'Registro Excluído com sucesso!');
    }
};
exports.ContasExtrasService = ContasExtrasService;
exports.ContasExtrasService = ContasExtrasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof response_message_1.ResponseService !== "undefined" && response_message_1.ResponseService) === "function" ? _b : Object])
], ContasExtrasService);


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateContaDTO = void 0;
class CreateContaDTO {
}
exports.CreateContaDTO = CreateContaDTO;


/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateContaDTO = void 0;
class UpdateContaDTO {
}
exports.UpdateContaDTO = UpdateContaDTO;


/***/ }),
/* 71 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CentroCustoModule = void 0;
const common_1 = __webpack_require__(4);
const centro_custo_controller_1 = __webpack_require__(72);
const prisma_service_1 = __webpack_require__(9);
const centro_custo_service_1 = __webpack_require__(73);
const response_message_1 = __webpack_require__(15);
let CentroCustoModule = class CentroCustoModule {
};
exports.CentroCustoModule = CentroCustoModule;
exports.CentroCustoModule = CentroCustoModule = __decorate([
    (0, common_1.Module)({
        controllers: [centro_custo_controller_1.CentroCustoController],
        providers: [prisma_service_1.PrismaService, centro_custo_service_1.CentroCustoService, response_message_1.ResponseService],
    })
], CentroCustoModule);


/***/ }),
/* 72 */
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
exports.CentroCustoController = void 0;
const common_1 = __webpack_require__(4);
const centro_custo_service_1 = __webpack_require__(73);
const create_centro_custo_dto_1 = __webpack_require__(74);
const update_centro_custo_dto_1 = __webpack_require__(75);
const session_decorator_1 = __webpack_require__(34);
let CentroCustoController = class CentroCustoController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.find(+id);
    }
    create(data) {
        return this.service.create(data);
    }
    update(data) {
        return this.service.update(data);
    }
    remove(id) {
        return this.service.remove(+id);
    }
};
exports.CentroCustoController = CentroCustoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CentroCustoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CentroCustoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, session_decorator_1.Session)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_centro_custo_dto_1.CreateCentroCustoDTO !== "undefined" && create_centro_custo_dto_1.CreateCentroCustoDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CentroCustoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    (0, session_decorator_1.Session)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof update_centro_custo_dto_1.UpdateCentroCusto !== "undefined" && update_centro_custo_dto_1.UpdateCentroCusto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CentroCustoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CentroCustoController.prototype, "remove", null);
exports.CentroCustoController = CentroCustoController = __decorate([
    (0, common_1.Controller)('api/v1/centro-custo'),
    __metadata("design:paramtypes", [typeof (_a = typeof centro_custo_service_1.CentroCustoService !== "undefined" && centro_custo_service_1.CentroCustoService) === "function" ? _a : Object])
], CentroCustoController);


/***/ }),
/* 73 */
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
exports.CentroCustoService = void 0;
const common_1 = __webpack_require__(4);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
let CentroCustoService = class CentroCustoService {
    constructor(db, responseService) {
        this.db = db;
        this.responseService = responseService;
    }
    findAll() {
        return this.db.centroCusto.findMany();
    }
    find(id) {
        return this.db.centroCusto.findFirst({
            where: { id: id },
        });
    }
    async create(data) {
        try {
            await this.db.centroCusto.create({
                data: {
                    cod_entidade: data.cod_entidade,
                    cod_centro_custo: data.cod_centro_custo,
                    descricao: data.descricao.toUpperCase(),
                    criado_por: global.SESSION.id,
                },
            });
            return this.responseService.success({}, 'Centro de Custo criado com sucesso!');
        }
        catch (error) {
            return this.responseService.error('Ocorreu um erro ao tentar criar o centro de custo.', error);
        }
    }
    async update(data) {
        try {
            await this.db.centroCusto.update({
                where: { id: data.id },
                data: {
                    cod_entidade: data.cod_entidade,
                    cod_centro_custo: data.cod_centro_custo,
                    descricao: data.descricao.toUpperCase(),
                    ativo: data.ativo,
                    alterado_em: new Date(),
                    alterado_por: global.SESSION.id,
                },
            });
            return this.responseService.success({}, 'Centro de Custo criado com sucesso!');
        }
        catch (error) {
            return this.responseService.error('Ocorreu um erro ao tentar criar o centro de custo.', error);
        }
    }
    async remove(id) {
        await this.db.centroCusto.delete({
            where: { id: id },
        });
        return this.responseService.success({}, 'Registro Excluído com sucesso!');
    }
};
exports.CentroCustoService = CentroCustoService;
exports.CentroCustoService = CentroCustoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof response_message_1.ResponseService !== "undefined" && response_message_1.ResponseService) === "function" ? _b : Object])
], CentroCustoService);


/***/ }),
/* 74 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCentroCustoDTO = void 0;
class CreateCentroCustoDTO {
}
exports.CreateCentroCustoDTO = CreateCentroCustoDTO;


/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCentroCusto = void 0;
class UpdateCentroCusto {
}
exports.UpdateCentroCusto = UpdateCentroCusto;


/***/ }),
/* 76 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GavetaModule = void 0;
const common_1 = __webpack_require__(4);
const gaveta_controller_1 = __webpack_require__(77);
const gaveta_service_1 = __webpack_require__(78);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
let GavetaModule = class GavetaModule {
};
exports.GavetaModule = GavetaModule;
exports.GavetaModule = GavetaModule = __decorate([
    (0, common_1.Module)({
        controllers: [gaveta_controller_1.GavetaController],
        providers: [gaveta_service_1.GavetaService, prisma_service_1.PrismaService, response_message_1.ResponseService],
    })
], GavetaModule);


/***/ }),
/* 77 */
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
exports.GavetaController = void 0;
const common_1 = __webpack_require__(4);
const gaveta_service_1 = __webpack_require__(78);
const create_gaveta_dto_1 = __webpack_require__(79);
const update_gaveta_dto_1 = __webpack_require__(80);
let GavetaController = class GavetaController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.find(+id);
    }
    create(data) {
        return this.service.create(data);
    }
    update(data) {
        return this.service.update(data);
    }
    remove(id) {
        return this.service.remove(+id);
    }
};
exports.GavetaController = GavetaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GavetaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GavetaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_gaveta_dto_1.CreateGavetaDTO !== "undefined" && create_gaveta_dto_1.CreateGavetaDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], GavetaController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof update_gaveta_dto_1.UpdateGavetaDTO !== "undefined" && update_gaveta_dto_1.UpdateGavetaDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], GavetaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GavetaController.prototype, "remove", null);
exports.GavetaController = GavetaController = __decorate([
    (0, common_1.Controller)('/api/v1/gaveta'),
    __metadata("design:paramtypes", [typeof (_a = typeof gaveta_service_1.GavetaService !== "undefined" && gaveta_service_1.GavetaService) === "function" ? _a : Object])
], GavetaController);


/***/ }),
/* 78 */
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
exports.GavetaService = void 0;
const common_1 = __webpack_require__(4);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
let GavetaService = class GavetaService {
    constructor(db, responseService) {
        this.db = db;
        this.responseService = responseService;
    }
    findAll() {
        return this.db.gaveta.findMany();
    }
    find(id) {
        return this.db.gaveta.findFirst({
            where: { id: id },
        });
    }
    async create(data) {
        try {
            await this.db.gaveta.create({
                data: {
                    descricao: data.descricao.toUpperCase(),
                    sala_id: data.sala_id,
                    armario_id: data.armario_id,
                    criado_por: global.SESSION.id,
                },
            });
            this.responseService.success({}, 'Gaveta criada com sucesso.');
        }
        catch (error) {
            this.responseService.error('Falha ao tentar criar a gaveta.', error);
        }
    }
    async update(data) {
        try {
            await this.db.gaveta.update({
                where: { id: data.id },
                data: {
                    descricao: data.descricao.toUpperCase(),
                    sala_id: data.sala_id,
                    armario_id: data.armario_id,
                    alterado_por: global.SESSION.id,
                    alterado_em: new Date(),
                },
            });
            this.responseService.success({}, 'Gaveta atualizada com sucesso.');
        }
        catch (error) {
            this.responseService.error('Falha ao tentar criar a gaveta.', error);
        }
    }
    remove(id) {
        this.db.gaveta.delete({
            where: { id: id },
        });
        this.responseService.success({}, 'Gaveta excluída com sucesso.');
    }
};
exports.GavetaService = GavetaService;
exports.GavetaService = GavetaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof response_message_1.ResponseService !== "undefined" && response_message_1.ResponseService) === "function" ? _b : Object])
], GavetaService);


/***/ }),
/* 79 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateGavetaDTO = void 0;
class CreateGavetaDTO {
}
exports.CreateGavetaDTO = CreateGavetaDTO;


/***/ }),
/* 80 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateGavetaDTO = void 0;
class UpdateGavetaDTO {
}
exports.UpdateGavetaDTO = UpdateGavetaDTO;


/***/ }),
/* 81 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CompartimentoModule = void 0;
const common_1 = __webpack_require__(4);
const compartimento_controller_1 = __webpack_require__(82);
const compartimento_service_1 = __webpack_require__(83);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
let CompartimentoModule = class CompartimentoModule {
};
exports.CompartimentoModule = CompartimentoModule;
exports.CompartimentoModule = CompartimentoModule = __decorate([
    (0, common_1.Module)({
        controllers: [compartimento_controller_1.CompartimentoController],
        providers: [compartimento_service_1.CompartimentoService, prisma_service_1.PrismaService, response_message_1.ResponseService],
    })
], CompartimentoModule);


/***/ }),
/* 82 */
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
exports.CompartimentoController = void 0;
const common_1 = __webpack_require__(4);
const compartimento_service_1 = __webpack_require__(83);
const create_compartimento_dto_1 = __webpack_require__(84);
const update_compartimento_dto_1 = __webpack_require__(85);
let CompartimentoController = class CompartimentoController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.find(+id);
    }
    create(data) {
        return this.service.create(data);
    }
    update(data) {
        return this.service.update(data);
    }
    remove(id) {
        return this.service.remove(+id);
    }
};
exports.CompartimentoController = CompartimentoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompartimentoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CompartimentoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_compartimento_dto_1.CreateCompartimentoDTO !== "undefined" && create_compartimento_dto_1.CreateCompartimentoDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CompartimentoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof update_compartimento_dto_1.UpdateCompartimentoDTO !== "undefined" && update_compartimento_dto_1.UpdateCompartimentoDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CompartimentoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CompartimentoController.prototype, "remove", null);
exports.CompartimentoController = CompartimentoController = __decorate([
    (0, common_1.Controller)('/api/v1/compartimento'),
    __metadata("design:paramtypes", [typeof (_a = typeof compartimento_service_1.CompartimentoService !== "undefined" && compartimento_service_1.CompartimentoService) === "function" ? _a : Object])
], CompartimentoController);


/***/ }),
/* 83 */
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
exports.CompartimentoService = void 0;
const common_1 = __webpack_require__(4);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
let CompartimentoService = class CompartimentoService {
    constructor(db, responseService) {
        this.db = db;
        this.responseService = responseService;
    }
    findAll() {
        return this.db.compartimento.findMany();
    }
    find(id) {
        return this.db.compartimento.findFirst({
            where: { id: id },
        });
    }
    async create(data) {
        try {
            await this.db.compartimento.create({
                data: {
                    descricao: data.descricao.toUpperCase(),
                    sala_id: data.sala_id,
                    armario_id: data.armario_id,
                    gaveta_id: data.gaveta_id,
                    criado_por: global.SESSION.id,
                },
            });
            return this.responseService.success({}, 'Compartimento cadastrado com sucesso!');
        }
        catch (error) {
            this.responseService.error('Erro ao cadastrar compartimento', error);
        }
    }
    async update(data) {
        try {
            await this.db.compartimento.update({
                where: { id: data.id },
                data: {
                    descricao: data.descricao.toUpperCase(),
                    sala_id: data.sala_id,
                    armario_id: data.armario_id,
                    gaveta_id: data.gaveta_id,
                    alterado_por: global.SESSION.id,
                    alterado_em: new Date(),
                },
            });
            return this.responseService.success({}, 'Compartimento atualizado com sucesso!');
        }
        catch (error) {
            this.responseService.error('Erro ao tentar atualizar compartimento', error);
        }
    }
    remove(id) {
        this.db.compartimento.delete({
            where: { id: id },
        });
        this.responseService.success({}, 'Compartimento excluído com sucesso!');
    }
};
exports.CompartimentoService = CompartimentoService;
exports.CompartimentoService = CompartimentoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof response_message_1.ResponseService !== "undefined" && response_message_1.ResponseService) === "function" ? _b : Object])
], CompartimentoService);


/***/ }),
/* 84 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCompartimentoDTO = void 0;
class CreateCompartimentoDTO {
}
exports.CreateCompartimentoDTO = CreateCompartimentoDTO;


/***/ }),
/* 85 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCompartimentoDTO = void 0;
class UpdateCompartimentoDTO {
}
exports.UpdateCompartimentoDTO = UpdateCompartimentoDTO;


/***/ }),
/* 86 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnidadeOrcamentariaModule = void 0;
const common_1 = __webpack_require__(4);
const unidade_orcamentaria_controller_1 = __webpack_require__(87);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
const unidade_orcamentaria_service_1 = __webpack_require__(88);
let UnidadeOrcamentariaModule = class UnidadeOrcamentariaModule {
};
exports.UnidadeOrcamentariaModule = UnidadeOrcamentariaModule;
exports.UnidadeOrcamentariaModule = UnidadeOrcamentariaModule = __decorate([
    (0, common_1.Module)({
        controllers: [unidade_orcamentaria_controller_1.UnidadeOrcamentariaController],
        providers: [prisma_service_1.PrismaService, response_message_1.ResponseService, unidade_orcamentaria_service_1.UnidadeOrcamentariaService],
    })
], UnidadeOrcamentariaModule);


/***/ }),
/* 87 */
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
exports.UnidadeOrcamentariaController = void 0;
const common_1 = __webpack_require__(4);
const unidade_orcamentaria_service_1 = __webpack_require__(88);
const session_decorator_1 = __webpack_require__(34);
const create_unidade_orcamentaria_dto_1 = __webpack_require__(90);
const update_unidade_orcamentaria_dto_1 = __webpack_require__(91);
let UnidadeOrcamentariaController = class UnidadeOrcamentariaController {
    constructor(service) {
        this.service = service;
    }
    findPage(page) {
        const pageNumber = parseInt(page, 10);
        return this.service.getPaginatedItems(pageNumber, 10);
    }
    findAll() {
        return this.service.findAll();
    }
    find(id) {
        return this.service.find(+id);
    }
    listOptions(descricao) {
        return this.service.listOptions(descricao);
    }
    findOne(id) {
        return this.service.find(+id);
    }
    create(data) {
        return this.service.create(data);
    }
    update(data) {
        return this.service.update(data);
    }
    remove(id) {
        return this.service.remove(+id);
    }
};
exports.UnidadeOrcamentariaController = UnidadeOrcamentariaController;
__decorate([
    (0, common_1.Get)('/page'),
    __param(0, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UnidadeOrcamentariaController.prototype, "findPage", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UnidadeOrcamentariaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/find'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UnidadeOrcamentariaController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/options'),
    __param(0, (0, common_1.Query)('descricao')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UnidadeOrcamentariaController.prototype, "listOptions", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UnidadeOrcamentariaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, session_decorator_1.Session)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_unidade_orcamentaria_dto_1.CreateUnidadeOrcamentariaDTO !== "undefined" && create_unidade_orcamentaria_dto_1.CreateUnidadeOrcamentariaDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UnidadeOrcamentariaController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof update_unidade_orcamentaria_dto_1.UpdateUnidadeOrcamentariaDTO !== "undefined" && update_unidade_orcamentaria_dto_1.UpdateUnidadeOrcamentariaDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], UnidadeOrcamentariaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UnidadeOrcamentariaController.prototype, "remove", null);
exports.UnidadeOrcamentariaController = UnidadeOrcamentariaController = __decorate([
    (0, common_1.Controller)('/api/v1/unidade-orcamentaria'),
    __metadata("design:paramtypes", [typeof (_a = typeof unidade_orcamentaria_service_1.UnidadeOrcamentariaService !== "undefined" && unidade_orcamentaria_service_1.UnidadeOrcamentariaService) === "function" ? _a : Object])
], UnidadeOrcamentariaController);


/***/ }),
/* 88 */
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
exports.UnidadeOrcamentariaService = void 0;
const response_message_1 = __webpack_require__(15);
const prisma_service_1 = __webpack_require__(9);
const common_1 = __webpack_require__(4);
const pagination_helper_1 = __webpack_require__(89);
let UnidadeOrcamentariaService = class UnidadeOrcamentariaService {
    constructor(db, responseService) {
        this.db = db;
        this.responseService = responseService;
    }
    findAll() {
        return this.db.unidadeOrcamentaria.findMany();
    }
    find(id) {
        return this.db.unidadeOrcamentaria.findFirst({
            where: { id: id },
        });
    }
    listOptions(descricao) {
        return this.db.unidadeOrcamentaria.findMany({
            where: { descricao: { contains: descricao, mode: 'insensitive' } },
            take: 10,
        });
    }
    async create(data) {
        try {
            await this.db.unidadeOrcamentaria.create({
                data: {
                    descricao: data.descricao.toUpperCase(),
                    cnpj: data.cnpj,
                    cod_orgao: data.cod_orgao,
                    cod_unidade_orcamentaria: data.cod_unidade_orcamentaria,
                    responsavel: data.responsavel,
                    ativo: 'S',
                    criado_por: global.SESSION.id,
                },
            });
            this.responseService.success(null, 'Unidade Orçamentária criada com sucesso!');
        }
        catch (error) {
            this.responseService.error('Erro ao tentar criar a Unidade Orçamentária', error);
        }
    }
    async update(data) {
        try {
            await this.db.unidadeOrcamentaria.update({
                where: { id: data.id },
                data: {
                    descricao: data.descricao.toUpperCase(),
                    cnpj: data.cnpj,
                    ativo: data.ativo,
                    alterado_em: new Date(),
                    alterado_por: global.SESSION.id,
                },
            });
            this.responseService.success(null, 'Unidade Orçamentária atualizada com sucesso!');
        }
        catch (error) {
            this.responseService.error('Erro ao tentar atualizar a Unidade Orçamentária', error);
        }
    }
    remove(id) {
        this.db.unidadeOrcamentaria.delete({
            where: { id: id },
        });
        this.responseService.success(null, 'Unidade Orçamentária excluída com sucesso!');
    }
    async getPaginatedItems(page, limit) {
        return await (0, pagination_helper_1.paginate)(this.db.unidadeOrcamentaria, { page, limit });
    }
};
exports.UnidadeOrcamentariaService = UnidadeOrcamentariaService;
exports.UnidadeOrcamentariaService = UnidadeOrcamentariaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof response_message_1.ResponseService !== "undefined" && response_message_1.ResponseService) === "function" ? _b : Object])
], UnidadeOrcamentariaService);


/***/ }),
/* 89 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.paginate = paginate;
async function paginate(prismaModel, paginationParams = { page: 1, limit: 10 }, whereClause = {}, orderBy = {}) {
    const { page = 1, limit = 10 } = paginationParams;
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
        prismaModel.findMany({
            where: whereClause,
            orderBy: orderBy,
            skip: skip,
            take: limit,
        }),
        prismaModel.count({
            where: whereClause,
        }),
    ]);
    return {
        data,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
    };
}


/***/ }),
/* 90 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUnidadeOrcamentariaDTO = void 0;
class CreateUnidadeOrcamentariaDTO {
}
exports.CreateUnidadeOrcamentariaDTO = CreateUnidadeOrcamentariaDTO;


/***/ }),
/* 91 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUnidadeOrcamentariaDTO = void 0;
class UpdateUnidadeOrcamentariaDTO {
}
exports.UpdateUnidadeOrcamentariaDTO = UpdateUnidadeOrcamentariaDTO;


/***/ }),
/* 92 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TiposDocumentosModule = void 0;
const common_1 = __webpack_require__(4);
const tipos_documentos_controller_1 = __webpack_require__(93);
const tipos_documentos_service_1 = __webpack_require__(94);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
let TiposDocumentosModule = class TiposDocumentosModule {
};
exports.TiposDocumentosModule = TiposDocumentosModule;
exports.TiposDocumentosModule = TiposDocumentosModule = __decorate([
    (0, common_1.Module)({
        controllers: [tipos_documentos_controller_1.TiposDocumentosController],
        providers: [tipos_documentos_service_1.TiposDocumentosService, prisma_service_1.PrismaService, response_message_1.ResponseService],
    })
], TiposDocumentosModule);


/***/ }),
/* 93 */
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
exports.TiposDocumentosController = void 0;
const common_1 = __webpack_require__(4);
const tipos_documentos_service_1 = __webpack_require__(94);
const create_tipos_documentos_dto_1 = __webpack_require__(95);
let TiposDocumentosController = class TiposDocumentosController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findPage(page) {
        const pageNumber = parseInt(page, 10);
        return this.service.getPaginatedItems(pageNumber, 10);
    }
    findOne(id) {
        return this.service.find(+id);
    }
    create(data) {
        return this.service.create(data);
    }
    update(data) {
        return this.service.update(data);
    }
    delete(id) {
        return this.service.delete(+id);
    }
};
exports.TiposDocumentosController = TiposDocumentosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TiposDocumentosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/page'),
    __param(0, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TiposDocumentosController.prototype, "findPage", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TiposDocumentosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_tipos_documentos_dto_1.CreateTiposDocumentosDTO !== "undefined" && create_tipos_documentos_dto_1.CreateTiposDocumentosDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], TiposDocumentosController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof create_tipos_documentos_dto_1.CreateTiposDocumentosDTO !== "undefined" && create_tipos_documentos_dto_1.CreateTiposDocumentosDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], TiposDocumentosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TiposDocumentosController.prototype, "delete", null);
exports.TiposDocumentosController = TiposDocumentosController = __decorate([
    (0, common_1.Controller)('/api/v1/tipos-documentos'),
    __metadata("design:paramtypes", [typeof (_a = typeof tipos_documentos_service_1.TiposDocumentosService !== "undefined" && tipos_documentos_service_1.TiposDocumentosService) === "function" ? _a : Object])
], TiposDocumentosController);


/***/ }),
/* 94 */
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
exports.TiposDocumentosService = void 0;
const common_1 = __webpack_require__(4);
const response_message_1 = __webpack_require__(15);
const prisma_service_1 = __webpack_require__(9);
const pagination_helper_1 = __webpack_require__(89);
let TiposDocumentosService = class TiposDocumentosService {
    constructor(db, responseService) {
        this.db = db;
        this.responseService = responseService;
    }
    findAll() {
        return this.db.tiposDocumentos.findMany();
    }
    async getPaginatedItems(page, limit) {
        return await (0, pagination_helper_1.paginate)(this.db.tiposDocumentos, { page, limit });
    }
    find(id) {
        return this.db.tiposDocumentos.findFirst({
            where: { id: id },
        });
    }
    create(data) {
        return this.db.tiposDocumentos.create({
            data: {
                descricao: data.descricao.toUpperCase(),
            },
        });
    }
    update(data) {
        return this.db.tiposDocumentos.update({
            where: { id: data.id },
            data: {
                descricao: data.descricao.toUpperCase(),
            },
        });
    }
    delete(id) {
        return this.db.tiposDocumentos.delete({
            where: { id: id },
        });
    }
};
exports.TiposDocumentosService = TiposDocumentosService;
exports.TiposDocumentosService = TiposDocumentosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof response_message_1.ResponseService !== "undefined" && response_message_1.ResponseService) === "function" ? _b : Object])
], TiposDocumentosService);


/***/ }),
/* 95 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTiposDocumentosDTO = void 0;
class CreateTiposDocumentosDTO {
}
exports.CreateTiposDocumentosDTO = CreateTiposDocumentosDTO;


/***/ }),
/* 96 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetoresModule = void 0;
const common_1 = __webpack_require__(4);
const setores_controller_1 = __webpack_require__(97);
const setores_service_1 = __webpack_require__(98);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
let SetoresModule = class SetoresModule {
};
exports.SetoresModule = SetoresModule;
exports.SetoresModule = SetoresModule = __decorate([
    (0, common_1.Module)({
        controllers: [setores_controller_1.SetoresController],
        providers: [setores_service_1.SetoresServices, prisma_service_1.PrismaService, response_message_1.ResponseService],
    })
], SetoresModule);


/***/ }),
/* 97 */
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
exports.SetoresController = void 0;
const common_1 = __webpack_require__(4);
const constants_1 = __webpack_require__(16);
const setores_service_1 = __webpack_require__(98);
const create_setores_dto_1 = __webpack_require__(99);
const update_setores_dto_1 = __webpack_require__(100);
let SetoresController = class SetoresController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.indAll();
    }
    findPage(page) {
        const pageNumber = parseInt(page, 10);
        return this.service.getPaginatedItems(pageNumber, 10);
    }
    findOne(id) {
        return this.service.find(+id);
    }
    create(data) {
        return this.service.create(data);
    }
    update(data) {
        return this.service.update(data);
    }
    remove(id) {
        return this.service.delete(+id);
    }
};
exports.SetoresController = SetoresController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SetoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/page'),
    __param(0, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SetoresController.prototype, "findPage", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SetoresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_setores_dto_1.CreateSetoresDTO !== "undefined" && create_setores_dto_1.CreateSetoresDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], SetoresController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof update_setores_dto_1.UpdateSetoresDto !== "undefined" && update_setores_dto_1.UpdateSetoresDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], SetoresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SetoresController.prototype, "remove", null);
exports.SetoresController = SetoresController = __decorate([
    (0, common_1.Controller)(constants_1.APIV1 + 'setores'),
    __metadata("design:paramtypes", [typeof (_a = typeof setores_service_1.SetoresServices !== "undefined" && setores_service_1.SetoresServices) === "function" ? _a : Object])
], SetoresController);


/***/ }),
/* 98 */
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
exports.SetoresServices = void 0;
const common_1 = __webpack_require__(4);
const pagination_helper_1 = __webpack_require__(89);
const prisma_service_1 = __webpack_require__(9);
const response_message_1 = __webpack_require__(15);
let SetoresServices = class SetoresServices {
    constructor(db, responseService) {
        this.db = db;
        this.responseService = responseService;
    }
    indAll() {
        return this.db.tiposDocumentos.findMany();
    }
    async getPaginatedItems(page, limit) {
        return await (0, pagination_helper_1.paginate)(this.db.setores, { page, limit });
    }
    find(id) {
        return this.db.tiposDocumentos.findFirst({
            where: { id: id },
        });
    }
    create(data) {
        return this.db.setores.create({
            data: {
                descricao: data.descricao.toUpperCase(),
                unidade_orcamentaria_id: data.unidade_orcamentaria_id,
            },
        });
    }
    update(data) {
        return this.db.setores.update({
            where: { id: data.id },
            data: {
                descricao: data.descricao.toUpperCase(),
                unidade_orcamentaria_id: data.unidade_orcamentaria_id,
            },
        });
    }
    delete(id) {
        return this.db.tiposDocumentos.delete({
            where: { id: id },
        });
    }
};
exports.SetoresServices = SetoresServices;
exports.SetoresServices = SetoresServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof response_message_1.ResponseService !== "undefined" && response_message_1.ResponseService) === "function" ? _b : Object])
], SetoresServices);


/***/ }),
/* 99 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateSetoresDTO = void 0;
class CreateSetoresDTO {
}
exports.CreateSetoresDTO = CreateSetoresDTO;


/***/ }),
/* 100 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSetoresDto = void 0;
class UpdateSetoresDto {
}
exports.UpdateSetoresDto = UpdateSetoresDto;


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
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
const session_interceptor_1 = __webpack_require__(40);
const validation_pipe_1 = __webpack_require__(54);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, Authorization, Accept, x-cliente-id',
        credentials: true,
        preflightContinue: false,
        optionsSuccessStatus: 204,
    });
    await app.listen(3333);
    app.useGlobalInterceptors(new session_interceptor_1.SessionInterceptor(new core_1.Reflector()));
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
}
bootstrap();

})();

/******/ })()
;