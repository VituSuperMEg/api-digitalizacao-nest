/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
__webpack_require__(/*! dotenv/config */ "dotenv/config");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const entidades_module_1 = __webpack_require__(/*! ./entidades/entidades.module */ "./src/entidades/entidades.module.ts");
const auth_module_1 = __webpack_require__(/*! ./controllers/auth/auth.module */ "./src/controllers/auth/auth.module.ts");
const prisma_service_1 = __webpack_require__(/*! ./services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const database_guard_1 = __webpack_require__(/*! ./config/guards/database.guard */ "./src/config/guards/database.guard.ts");
const users_module_1 = __webpack_require__(/*! ./controllers/users/users.module */ "./src/controllers/users/users.module.ts");
const ano_mes_module_1 = __webpack_require__(/*! ./controllers/ano_mes/ano_mes.module */ "./src/controllers/ano_mes/ano_mes.module.ts");
const salas_module_1 = __webpack_require__(/*! ./controllers/salas/salas.module */ "./src/controllers/salas/salas.module.ts");
const armario_module_1 = __webpack_require__(/*! ./controllers/armario/armario.module */ "./src/controllers/armario/armario.module.ts");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const session_interceptor_1 = __webpack_require__(/*! ./customs/interceptor/session.interceptor */ "./src/customs/interceptor/session.interceptor.ts");
const credores_module_1 = __webpack_require__(/*! ./controllers/credores/credores.module */ "./src/controllers/credores/credores.module.ts");
const orgaos_module_1 = __webpack_require__(/*! ./controllers/orgaos/orgaos.module */ "./src/controllers/orgaos/orgaos.module.ts");
const validation_pipe_1 = __webpack_require__(/*! ./pipes/validation.pipe */ "./src/pipes/validation.pipe.ts");
const caixas_module_1 = __webpack_require__(/*! ./controllers/caixas/caixas.module */ "./src/controllers/caixas/caixas.module.ts");
const prateleira_module_1 = __webpack_require__(/*! ./controllers/prateleira/prateleira.module */ "./src/controllers/prateleira/prateleira.module.ts");
const contas_extras_module_1 = __webpack_require__(/*! ./controllers/contas_extras/contas_extras.module */ "./src/controllers/contas_extras/contas_extras.module.ts");
const centro_custo_module_1 = __webpack_require__(/*! ./controllers/centro_custo/centro_custo.module */ "./src/controllers/centro_custo/centro_custo.module.ts");
const gaveta_module_1 = __webpack_require__(/*! ./controllers/gaveta/gaveta.module */ "./src/controllers/gaveta/gaveta.module.ts");
const compartimento_module_1 = __webpack_require__(/*! ./controllers/compartimento/compartimento.module */ "./src/controllers/compartimento/compartimento.module.ts");
const unidade_orcamentaria_module_1 = __webpack_require__(/*! ./controllers/unidade_orcamentaria/unidade-orcamentaria.module */ "./src/controllers/unidade_orcamentaria/unidade-orcamentaria.module.ts");
const tipos_documentos_module_1 = __webpack_require__(/*! ./controllers/tipos-documentos/tipos-documentos.module */ "./src/controllers/tipos-documentos/tipos-documentos.module.ts");
const setores_module_1 = __webpack_require__(/*! ./controllers/setores/setores.module */ "./src/controllers/setores/setores.module.ts");
const bancos_module_1 = __webpack_require__(/*! ./controllers/bancos/bancos.module */ "./src/controllers/bancos/bancos.module.ts");
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
            bancos_module_1.BancosModule,
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

/***/ "./src/config/clients.ts":
/*!*******************************!*\
  !*** ./src/config/clients.ts ***!
  \*******************************/
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
            host: 'ep-delicate-sun-a4o7w5bi-pooler.us-east-1.aws.neon.tech',
            port: '5432',
            username: 'default',
            database: 'verceldb',
            password: 'qu0jco1wiMCt',
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

/***/ "./src/config/guards/auth.guards.ts":
/*!******************************************!*\
  !*** ./src/config/guards/auth.guards.ts ***!
  \******************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const constants_1 = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
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

/***/ "./src/config/guards/database.guard.ts":
/*!*********************************************!*\
  !*** ./src/config/guards/database.guard.ts ***!
  \*********************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
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

/***/ "./src/constants/constants.ts":
/*!************************************!*\
  !*** ./src/constants/constants.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.APIV1 = exports.jwtConstants = void 0;
exports.jwtConstants = {
    secret: '5bfca4a1474397f842accb61211ab197',
};
exports.APIV1 = '/api/v1/';


/***/ }),

/***/ "./src/controllers/ano_mes/ano_mes.controller.ts":
/*!*******************************************************!*\
  !*** ./src/controllers/ano_mes/ano_mes.controller.ts ***!
  \*******************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const ano_mes_service_1 = __webpack_require__(/*! ./ano_mes.service */ "./src/controllers/ano_mes/ano_mes.service.ts");
const create_ano_mes_dto_1 = __webpack_require__(/*! ./dto/create.ano_mes.dto */ "./src/controllers/ano_mes/dto/create.ano_mes.dto.ts");
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

/***/ "./src/controllers/ano_mes/ano_mes.module.ts":
/*!***************************************************!*\
  !*** ./src/controllers/ano_mes/ano_mes.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnoMesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
const ano_mes_controller_1 = __webpack_require__(/*! ./ano_mes.controller */ "./src/controllers/ano_mes/ano_mes.controller.ts");
const ano_mes_service_1 = __webpack_require__(/*! ./ano_mes.service */ "./src/controllers/ano_mes/ano_mes.service.ts");
const app_util_1 = __webpack_require__(/*! src/services/app-util */ "./src/services/app-util.ts");
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

/***/ "./src/controllers/ano_mes/ano_mes.service.ts":
/*!****************************************************!*\
  !*** ./src/controllers/ano_mes/ano_mes.service.ts ***!
  \****************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
const app_util_1 = __webpack_require__(/*! src/services/app-util */ "./src/services/app-util.ts");
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

/***/ "./src/controllers/ano_mes/dto/create.ano_mes.dto.ts":
/*!***********************************************************!*\
  !*** ./src/controllers/ano_mes/dto/create.ano_mes.dto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAnoMesDTO = void 0;
class CreateAnoMesDTO {
}
exports.CreateAnoMesDTO = CreateAnoMesDTO;


/***/ }),

/***/ "./src/controllers/armario/armario.controller.ts":
/*!*******************************************************!*\
  !*** ./src/controllers/armario/armario.controller.ts ***!
  \*******************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_guards_1 = __webpack_require__(/*! src/config/guards/auth.guards */ "./src/config/guards/auth.guards.ts");
const armario_service_1 = __webpack_require__(/*! ./armario.service */ "./src/controllers/armario/armario.service.ts");
const create_armario_dto_1 = __webpack_require__(/*! ./dto/create-armario.dto */ "./src/controllers/armario/dto/create-armario.dto.ts");
const update_armario_dto_1 = __webpack_require__(/*! ./dto/update-armario.dto */ "./src/controllers/armario/dto/update-armario.dto.ts");
const session_decorator_1 = __webpack_require__(/*! src/customs/decorator/session.decorator */ "./src/customs/decorator/session.decorator.ts");
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

/***/ "./src/controllers/armario/armario.module.ts":
/*!***************************************************!*\
  !*** ./src/controllers/armario/armario.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArmarioModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const armario_controller_1 = __webpack_require__(/*! ./armario.controller */ "./src/controllers/armario/armario.controller.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
const armario_service_1 = __webpack_require__(/*! ./armario.service */ "./src/controllers/armario/armario.service.ts");
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

/***/ "./src/controllers/armario/armario.service.ts":
/*!****************************************************!*\
  !*** ./src/controllers/armario/armario.service.ts ***!
  \****************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/controllers/armario/dto/create-armario.dto.ts":
/*!***********************************************************!*\
  !*** ./src/controllers/armario/dto/create-armario.dto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateArmaroDTO = void 0;
class CreateArmaroDTO {
}
exports.CreateArmaroDTO = CreateArmaroDTO;


/***/ }),

/***/ "./src/controllers/armario/dto/update-armario.dto.ts":
/*!***********************************************************!*\
  !*** ./src/controllers/armario/dto/update-armario.dto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateArmarioDTO = void 0;
class UpdateArmarioDTO {
}
exports.UpdateArmarioDTO = UpdateArmarioDTO;


/***/ }),

/***/ "./src/controllers/auth/auth.controller.ts":
/*!*************************************************!*\
  !*** ./src/controllers/auth/auth.controller.ts ***!
  \*************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/controllers/auth/auth.service.ts");
const database_guard_1 = __webpack_require__(/*! src/config/guards/database.guard */ "./src/config/guards/database.guard.ts");
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

/***/ "./src/controllers/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/controllers/auth/auth.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/controllers/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/controllers/auth/auth.service.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const constants_1 = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
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

/***/ "./src/controllers/auth/auth.service.ts":
/*!**********************************************!*\
  !*** ./src/controllers/auth/auth.service.ts ***!
  \**********************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const clients_1 = __webpack_require__(/*! src/config/clients */ "./src/config/clients.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/controllers/bancos/bancos.controller.ts":
/*!*****************************************************!*\
  !*** ./src/controllers/bancos/bancos.controller.ts ***!
  \*****************************************************/
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
exports.BancosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bancos_service_1 = __webpack_require__(/*! ./bancos.service */ "./src/controllers/bancos/bancos.service.ts");
let BancosController = class BancosController {
    constructor(service) {
        this.service = service;
    }
    find(id) {
        return this.service.find(+id);
    }
    listOptions(descricao) {
        return this.service.listOptions(descricao);
    }
};
exports.BancosController = BancosController;
__decorate([
    (0, common_1.Get)('/find'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BancosController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/options'),
    __param(0, (0, common_1.Query)('descricao')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BancosController.prototype, "listOptions", null);
exports.BancosController = BancosController = __decorate([
    (0, common_1.Controller)('api/v1/bancos'),
    __metadata("design:paramtypes", [typeof (_a = typeof bancos_service_1.BancosServices !== "undefined" && bancos_service_1.BancosServices) === "function" ? _a : Object])
], BancosController);


/***/ }),

/***/ "./src/controllers/bancos/bancos.module.ts":
/*!*************************************************!*\
  !*** ./src/controllers/bancos/bancos.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BancosModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bancos_controller_1 = __webpack_require__(/*! ./bancos.controller */ "./src/controllers/bancos/bancos.controller.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const bancos_service_1 = __webpack_require__(/*! ./bancos.service */ "./src/controllers/bancos/bancos.service.ts");
let BancosModule = class BancosModule {
};
exports.BancosModule = BancosModule;
exports.BancosModule = BancosModule = __decorate([
    (0, common_1.Module)({
        controllers: [bancos_controller_1.BancosController],
        providers: [bancos_service_1.BancosServices, prisma_service_1.PrismaService],
    })
], BancosModule);


/***/ }),

/***/ "./src/controllers/bancos/bancos.service.ts":
/*!**************************************************!*\
  !*** ./src/controllers/bancos/bancos.service.ts ***!
  \**************************************************/
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
exports.BancosServices = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
let BancosServices = class BancosServices {
    constructor(db) {
        this.db = db;
    }
    find(id) {
        return this.db.bancos.findFirst({
            where: { id: id },
        });
    }
    listOptions(descricao) {
        return this.db.bancos.findMany({
            where: { descricao: { contains: descricao, mode: 'insensitive' } },
            take: 10,
        });
    }
};
exports.BancosServices = BancosServices;
exports.BancosServices = BancosServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], BancosServices);


/***/ }),

/***/ "./src/controllers/caixas/caixas.controller.ts":
/*!*****************************************************!*\
  !*** ./src/controllers/caixas/caixas.controller.ts ***!
  \*****************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const caixas_service_1 = __webpack_require__(/*! ./caixas.service */ "./src/controllers/caixas/caixas.service.ts");
const create_caixas_dto_1 = __webpack_require__(/*! ./dto/create-caixas.dto */ "./src/controllers/caixas/dto/create-caixas.dto.ts");
const update_caixas_dto_1 = __webpack_require__(/*! ./dto/update-caixas.dto */ "./src/controllers/caixas/dto/update-caixas.dto.ts");
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

/***/ "./src/controllers/caixas/caixas.module.ts":
/*!*************************************************!*\
  !*** ./src/controllers/caixas/caixas.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CaixasModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const caixas_controller_1 = __webpack_require__(/*! ./caixas.controller */ "./src/controllers/caixas/caixas.controller.ts");
const caixas_service_1 = __webpack_require__(/*! ./caixas.service */ "./src/controllers/caixas/caixas.service.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/controllers/caixas/caixas.service.ts":
/*!**************************************************!*\
  !*** ./src/controllers/caixas/caixas.service.ts ***!
  \**************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/controllers/caixas/dto/create-caixas.dto.ts":
/*!*********************************************************!*\
  !*** ./src/controllers/caixas/dto/create-caixas.dto.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCaixasDTO = void 0;
class CreateCaixasDTO {
}
exports.CreateCaixasDTO = CreateCaixasDTO;


/***/ }),

/***/ "./src/controllers/caixas/dto/update-caixas.dto.ts":
/*!*********************************************************!*\
  !*** ./src/controllers/caixas/dto/update-caixas.dto.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCaixasDTO = void 0;
class UpdateCaixasDTO {
}
exports.UpdateCaixasDTO = UpdateCaixasDTO;


/***/ }),

/***/ "./src/controllers/centro_custo/centro_custo.controller.ts":
/*!*****************************************************************!*\
  !*** ./src/controllers/centro_custo/centro_custo.controller.ts ***!
  \*****************************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const centro_custo_service_1 = __webpack_require__(/*! ./centro_custo.service */ "./src/controllers/centro_custo/centro_custo.service.ts");
const create_centro_custo_dto_1 = __webpack_require__(/*! ./dto/create-centro-custo.dto */ "./src/controllers/centro_custo/dto/create-centro-custo.dto.ts");
const update_centro_custo_dto_1 = __webpack_require__(/*! ./dto/update-centro-custo.dto */ "./src/controllers/centro_custo/dto/update-centro-custo.dto.ts");
const session_decorator_1 = __webpack_require__(/*! src/customs/decorator/session.decorator */ "./src/customs/decorator/session.decorator.ts");
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

/***/ "./src/controllers/centro_custo/centro_custo.module.ts":
/*!*************************************************************!*\
  !*** ./src/controllers/centro_custo/centro_custo.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CentroCustoModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const centro_custo_controller_1 = __webpack_require__(/*! ./centro_custo.controller */ "./src/controllers/centro_custo/centro_custo.controller.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const centro_custo_service_1 = __webpack_require__(/*! ./centro_custo.service */ "./src/controllers/centro_custo/centro_custo.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/controllers/centro_custo/centro_custo.service.ts":
/*!**************************************************************!*\
  !*** ./src/controllers/centro_custo/centro_custo.service.ts ***!
  \**************************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/controllers/centro_custo/dto/create-centro-custo.dto.ts":
/*!*********************************************************************!*\
  !*** ./src/controllers/centro_custo/dto/create-centro-custo.dto.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCentroCustoDTO = void 0;
class CreateCentroCustoDTO {
}
exports.CreateCentroCustoDTO = CreateCentroCustoDTO;


/***/ }),

/***/ "./src/controllers/centro_custo/dto/update-centro-custo.dto.ts":
/*!*********************************************************************!*\
  !*** ./src/controllers/centro_custo/dto/update-centro-custo.dto.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCentroCusto = void 0;
class UpdateCentroCusto {
}
exports.UpdateCentroCusto = UpdateCentroCusto;


/***/ }),

/***/ "./src/controllers/compartimento/compartimento.controller.ts":
/*!*******************************************************************!*\
  !*** ./src/controllers/compartimento/compartimento.controller.ts ***!
  \*******************************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const compartimento_service_1 = __webpack_require__(/*! ./compartimento.service */ "./src/controllers/compartimento/compartimento.service.ts");
const create_compartimento_dto_1 = __webpack_require__(/*! ./dto/create-compartimento.dto */ "./src/controllers/compartimento/dto/create-compartimento.dto.ts");
const update_compartimento_dto_1 = __webpack_require__(/*! ./dto/update-compartimento.dto */ "./src/controllers/compartimento/dto/update-compartimento.dto.ts");
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

/***/ "./src/controllers/compartimento/compartimento.module.ts":
/*!***************************************************************!*\
  !*** ./src/controllers/compartimento/compartimento.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CompartimentoModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const compartimento_controller_1 = __webpack_require__(/*! ./compartimento.controller */ "./src/controllers/compartimento/compartimento.controller.ts");
const compartimento_service_1 = __webpack_require__(/*! ./compartimento.service */ "./src/controllers/compartimento/compartimento.service.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/controllers/compartimento/compartimento.service.ts":
/*!****************************************************************!*\
  !*** ./src/controllers/compartimento/compartimento.service.ts ***!
  \****************************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/controllers/compartimento/dto/create-compartimento.dto.ts":
/*!***********************************************************************!*\
  !*** ./src/controllers/compartimento/dto/create-compartimento.dto.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCompartimentoDTO = void 0;
class CreateCompartimentoDTO {
}
exports.CreateCompartimentoDTO = CreateCompartimentoDTO;


/***/ }),

/***/ "./src/controllers/compartimento/dto/update-compartimento.dto.ts":
/*!***********************************************************************!*\
  !*** ./src/controllers/compartimento/dto/update-compartimento.dto.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCompartimentoDTO = void 0;
class UpdateCompartimentoDTO {
}
exports.UpdateCompartimentoDTO = UpdateCompartimentoDTO;


/***/ }),

/***/ "./src/controllers/contas_extras/contas_extras.controller.ts":
/*!*******************************************************************!*\
  !*** ./src/controllers/contas_extras/contas_extras.controller.ts ***!
  \*******************************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const contas_extras_service_1 = __webpack_require__(/*! ./contas_extras.service */ "./src/controllers/contas_extras/contas_extras.service.ts");
const create_conta_dto_1 = __webpack_require__(/*! ./dto/create-conta.dto */ "./src/controllers/contas_extras/dto/create-conta.dto.ts");
const update_conta_dto_1 = __webpack_require__(/*! ./dto/update-conta.dto */ "./src/controllers/contas_extras/dto/update-conta.dto.ts");
const session_decorator_1 = __webpack_require__(/*! src/customs/decorator/session.decorator */ "./src/customs/decorator/session.decorator.ts");
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

/***/ "./src/controllers/contas_extras/contas_extras.module.ts":
/*!***************************************************************!*\
  !*** ./src/controllers/contas_extras/contas_extras.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContasExtrasModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const contas_extras_controller_1 = __webpack_require__(/*! ./contas_extras.controller */ "./src/controllers/contas_extras/contas_extras.controller.ts");
const contas_extras_service_1 = __webpack_require__(/*! ./contas_extras.service */ "./src/controllers/contas_extras/contas_extras.service.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/controllers/contas_extras/contas_extras.service.ts":
/*!****************************************************************!*\
  !*** ./src/controllers/contas_extras/contas_extras.service.ts ***!
  \****************************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/controllers/contas_extras/dto/create-conta.dto.ts":
/*!***************************************************************!*\
  !*** ./src/controllers/contas_extras/dto/create-conta.dto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateContaDTO = void 0;
class CreateContaDTO {
}
exports.CreateContaDTO = CreateContaDTO;


/***/ }),

/***/ "./src/controllers/contas_extras/dto/update-conta.dto.ts":
/*!***************************************************************!*\
  !*** ./src/controllers/contas_extras/dto/update-conta.dto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateContaDTO = void 0;
class UpdateContaDTO {
}
exports.UpdateContaDTO = UpdateContaDTO;


/***/ }),

/***/ "./src/controllers/credores/credores.controller.ts":
/*!*********************************************************!*\
  !*** ./src/controllers/credores/credores.controller.ts ***!
  \*********************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_guards_1 = __webpack_require__(/*! src/config/guards/auth.guards */ "./src/config/guards/auth.guards.ts");
const credores_service_1 = __webpack_require__(/*! ./credores.service */ "./src/controllers/credores/credores.service.ts");
const create_credor_dto_1 = __webpack_require__(/*! ./dto/create-credor.dto */ "./src/controllers/credores/dto/create-credor.dto.ts");
const session_decorator_1 = __webpack_require__(/*! src/customs/decorator/session.decorator */ "./src/customs/decorator/session.decorator.ts");
const update_credor_dto_1 = __webpack_require__(/*! ./dto/update-credor.dto */ "./src/controllers/credores/dto/update-credor.dto.ts");
let CredoresController = class CredoresController {
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
exports.CredoresController = CredoresController;
__decorate([
    (0, common_1.Get)('/page'),
    __param(0, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CredoresController.prototype, "findPage", null);
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
], CredoresController.prototype, "findOne", null);
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

/***/ "./src/controllers/credores/credores.module.ts":
/*!*****************************************************!*\
  !*** ./src/controllers/credores/credores.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CredoresModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const credores_controller_1 = __webpack_require__(/*! ./credores.controller */ "./src/controllers/credores/credores.controller.ts");
const credores_service_1 = __webpack_require__(/*! ./credores.service */ "./src/controllers/credores/credores.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const app_util_1 = __webpack_require__(/*! src/services/app-util */ "./src/services/app-util.ts");
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

/***/ "./src/controllers/credores/credores.service.ts":
/*!******************************************************!*\
  !*** ./src/controllers/credores/credores.service.ts ***!
  \******************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
const app_util_1 = __webpack_require__(/*! src/services/app-util */ "./src/services/app-util.ts");
const pagination_helper_1 = __webpack_require__(/*! src/helpers/pagination.helper */ "./src/helpers/pagination.helper.ts");
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
    listOptions(descricao) {
        return this.db.credores.findMany({
            where: { nome: { contains: descricao, mode: 'insensitive' } },
            take: 10,
        });
    }
    async create(data) {
        const { agencia, banco_id, cep, cidade, conta, cpf, email, logradouro, nome, numero, observacoes, telefone, telefone_complementar, tipo_documento, bairro, } = data;
        const cpfClear = this.appUtil.clearMask(cpf);
        const telefoneClear = this.appUtil.clearMask(telefone);
        const telefoneComplementarClear = this.appUtil.clearMask(telefone_complementar);
        const cepClear = this.appUtil.clearMask(cep);
        await this.db.credores.create({
            data: {
                agencia,
                banco_id: +banco_id,
                cep: cepClear,
                cidade,
                conta,
                cpf: cpfClear,
                email,
                logradouro,
                nome,
                numero,
                observacoes,
                bairro: bairro.toUpperCase(),
                telefone: telefoneClear,
                telefone_complementar: telefoneComplementarClear,
                tipo_documento,
                criado_por: global.SESSION.id,
            },
        });
        return this.responseService.success({}, 'Registro criado com Sucesso');
    }
    async update(data) {
        const { id, agencia, banco_id, cep, cidade, conta, cpf, email, logradouro, nome, numero, observacoes, telefone, telefone_complementar, tipo_documento, bairro, } = data;
        const cpfClear = this.appUtil.clearMask(cpf);
        const telefoneClear = this.appUtil.clearMask(telefone);
        const telefoneComplementarClear = this.appUtil.clearMask(telefone_complementar);
        const cepClear = this.appUtil.clearMask(cep);
        await this.db.credores.update({
            where: { id: id },
            data: {
                agencia,
                banco_id: +banco_id,
                cep: cepClear,
                cidade,
                conta,
                cpf: cpfClear,
                email,
                logradouro,
                bairro: bairro.toUpperCase(),
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
    async getPaginatedItems(page, limit) {
        return await (0, pagination_helper_1.paginate)(this.db.credores, { page, limit });
    }
};
exports.CredoresService = CredoresService;
exports.CredoresService = CredoresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof response_message_1.ResponseService !== "undefined" && response_message_1.ResponseService) === "function" ? _b : Object, typeof (_c = typeof app_util_1.AppUtil !== "undefined" && app_util_1.AppUtil) === "function" ? _c : Object])
], CredoresService);


/***/ }),

/***/ "./src/controllers/credores/dto/create-credor.dto.ts":
/*!***********************************************************!*\
  !*** ./src/controllers/credores/dto/create-credor.dto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCredorDTO = void 0;
class CreateCredorDTO {
}
exports.CreateCredorDTO = CreateCredorDTO;


/***/ }),

/***/ "./src/controllers/credores/dto/update-credor.dto.ts":
/*!***********************************************************!*\
  !*** ./src/controllers/credores/dto/update-credor.dto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCredorDTO = void 0;
class UpdateCredorDTO {
}
exports.UpdateCredorDTO = UpdateCredorDTO;


/***/ }),

/***/ "./src/controllers/gaveta/dto/create-gaveta.dto.ts":
/*!*********************************************************!*\
  !*** ./src/controllers/gaveta/dto/create-gaveta.dto.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateGavetaDTO = void 0;
class CreateGavetaDTO {
}
exports.CreateGavetaDTO = CreateGavetaDTO;


/***/ }),

/***/ "./src/controllers/gaveta/dto/update-gaveta.dto.ts":
/*!*********************************************************!*\
  !*** ./src/controllers/gaveta/dto/update-gaveta.dto.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateGavetaDTO = void 0;
class UpdateGavetaDTO {
}
exports.UpdateGavetaDTO = UpdateGavetaDTO;


/***/ }),

/***/ "./src/controllers/gaveta/gaveta.controller.ts":
/*!*****************************************************!*\
  !*** ./src/controllers/gaveta/gaveta.controller.ts ***!
  \*****************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const gaveta_service_1 = __webpack_require__(/*! ./gaveta.service */ "./src/controllers/gaveta/gaveta.service.ts");
const create_gaveta_dto_1 = __webpack_require__(/*! ./dto/create-gaveta.dto */ "./src/controllers/gaveta/dto/create-gaveta.dto.ts");
const update_gaveta_dto_1 = __webpack_require__(/*! ./dto/update-gaveta.dto */ "./src/controllers/gaveta/dto/update-gaveta.dto.ts");
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

/***/ "./src/controllers/gaveta/gaveta.module.ts":
/*!*************************************************!*\
  !*** ./src/controllers/gaveta/gaveta.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GavetaModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const gaveta_controller_1 = __webpack_require__(/*! ./gaveta.controller */ "./src/controllers/gaveta/gaveta.controller.ts");
const gaveta_service_1 = __webpack_require__(/*! ./gaveta.service */ "./src/controllers/gaveta/gaveta.service.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/controllers/gaveta/gaveta.service.ts":
/*!**************************************************!*\
  !*** ./src/controllers/gaveta/gaveta.service.ts ***!
  \**************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/controllers/orgaos/dto/create-orgao.dto.ts":
/*!********************************************************!*\
  !*** ./src/controllers/orgaos/dto/create-orgao.dto.ts ***!
  \********************************************************/
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
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
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

/***/ "./src/controllers/orgaos/dto/update-orgao.dto.ts":
/*!********************************************************!*\
  !*** ./src/controllers/orgaos/dto/update-orgao.dto.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateOrgaosDTO = void 0;
class UpdateOrgaosDTO {
}
exports.UpdateOrgaosDTO = UpdateOrgaosDTO;


/***/ }),

/***/ "./src/controllers/orgaos/orgaos.controller.ts":
/*!*****************************************************!*\
  !*** ./src/controllers/orgaos/orgaos.controller.ts ***!
  \*****************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const orgaos_service_1 = __webpack_require__(/*! ./orgaos.service */ "./src/controllers/orgaos/orgaos.service.ts");
const create_orgao_dto_1 = __webpack_require__(/*! ./dto/create-orgao.dto */ "./src/controllers/orgaos/dto/create-orgao.dto.ts");
const session_decorator_1 = __webpack_require__(/*! src/customs/decorator/session.decorator */ "./src/customs/decorator/session.decorator.ts");
const update_orgao_dto_1 = __webpack_require__(/*! ./dto/update-orgao.dto */ "./src/controllers/orgaos/dto/update-orgao.dto.ts");
const validation_pipe_1 = __webpack_require__(/*! src/pipes/validation.pipe */ "./src/pipes/validation.pipe.ts");
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

/***/ "./src/controllers/orgaos/orgaos.module.ts":
/*!*************************************************!*\
  !*** ./src/controllers/orgaos/orgaos.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrgaosModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const orgaos_controller_1 = __webpack_require__(/*! ./orgaos.controller */ "./src/controllers/orgaos/orgaos.controller.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const orgaos_service_1 = __webpack_require__(/*! ./orgaos.service */ "./src/controllers/orgaos/orgaos.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
const app_util_1 = __webpack_require__(/*! src/services/app-util */ "./src/services/app-util.ts");
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

/***/ "./src/controllers/orgaos/orgaos.service.ts":
/*!**************************************************!*\
  !*** ./src/controllers/orgaos/orgaos.service.ts ***!
  \**************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
const app_util_1 = __webpack_require__(/*! src/services/app-util */ "./src/services/app-util.ts");
const db_services_1 = __webpack_require__(/*! src/services/prisma/db-services */ "./src/services/prisma/db-services.ts");
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

/***/ "./src/controllers/prateleira/dto/create-prateleira.dto.ts":
/*!*****************************************************************!*\
  !*** ./src/controllers/prateleira/dto/create-prateleira.dto.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePrateleiraDTO = void 0;
class CreatePrateleiraDTO {
}
exports.CreatePrateleiraDTO = CreatePrateleiraDTO;


/***/ }),

/***/ "./src/controllers/prateleira/dto/update-prateleira.dto.ts":
/*!*****************************************************************!*\
  !*** ./src/controllers/prateleira/dto/update-prateleira.dto.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePrateleiraDTO = void 0;
class UpdatePrateleiraDTO {
}
exports.UpdatePrateleiraDTO = UpdatePrateleiraDTO;


/***/ }),

/***/ "./src/controllers/prateleira/prateleira.controller.ts":
/*!*************************************************************!*\
  !*** ./src/controllers/prateleira/prateleira.controller.ts ***!
  \*************************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prateleira_service_1 = __webpack_require__(/*! ./prateleira.service */ "./src/controllers/prateleira/prateleira.service.ts");
const create_prateleira_dto_1 = __webpack_require__(/*! ./dto/create-prateleira.dto */ "./src/controllers/prateleira/dto/create-prateleira.dto.ts");
const update_prateleira_dto_1 = __webpack_require__(/*! ./dto/update-prateleira.dto */ "./src/controllers/prateleira/dto/update-prateleira.dto.ts");
const session_decorator_1 = __webpack_require__(/*! src/customs/decorator/session.decorator */ "./src/customs/decorator/session.decorator.ts");
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

/***/ "./src/controllers/prateleira/prateleira.module.ts":
/*!*********************************************************!*\
  !*** ./src/controllers/prateleira/prateleira.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrateleiraModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prateleira_controller_1 = __webpack_require__(/*! ./prateleira.controller */ "./src/controllers/prateleira/prateleira.controller.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
const prateleira_service_1 = __webpack_require__(/*! ./prateleira.service */ "./src/controllers/prateleira/prateleira.service.ts");
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

/***/ "./src/controllers/prateleira/prateleira.service.ts":
/*!**********************************************************!*\
  !*** ./src/controllers/prateleira/prateleira.service.ts ***!
  \**********************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/controllers/salas/dto/create-salas.dto.ts":
/*!*******************************************************!*\
  !*** ./src/controllers/salas/dto/create-salas.dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateSalasDTO = void 0;
class CreateSalasDTO {
}
exports.CreateSalasDTO = CreateSalasDTO;


/***/ }),

/***/ "./src/controllers/salas/dto/update-salas.dto.ts":
/*!*******************************************************!*\
  !*** ./src/controllers/salas/dto/update-salas.dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSalasDTO = void 0;
class UpdateSalasDTO {
}
exports.UpdateSalasDTO = UpdateSalasDTO;


/***/ }),

/***/ "./src/controllers/salas/salas.controller.ts":
/*!***************************************************!*\
  !*** ./src/controllers/salas/salas.controller.ts ***!
  \***************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const salas_service_1 = __webpack_require__(/*! ./salas.service */ "./src/controllers/salas/salas.service.ts");
const auth_guards_1 = __webpack_require__(/*! src/config/guards/auth.guards */ "./src/config/guards/auth.guards.ts");
const update_salas_dto_1 = __webpack_require__(/*! ./dto/update-salas.dto */ "./src/controllers/salas/dto/update-salas.dto.ts");
const create_salas_dto_1 = __webpack_require__(/*! ./dto/create-salas.dto */ "./src/controllers/salas/dto/create-salas.dto.ts");
const session_decorator_1 = __webpack_require__(/*! src/customs/decorator/session.decorator */ "./src/customs/decorator/session.decorator.ts");
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

/***/ "./src/controllers/salas/salas.module.ts":
/*!***********************************************!*\
  !*** ./src/controllers/salas/salas.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SalasModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const salas_service_1 = __webpack_require__(/*! ./salas.service */ "./src/controllers/salas/salas.service.ts");
const salas_controller_1 = __webpack_require__(/*! ./salas.controller */ "./src/controllers/salas/salas.controller.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/controllers/salas/salas.service.ts":
/*!************************************************!*\
  !*** ./src/controllers/salas/salas.service.ts ***!
  \************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/controllers/setores/dto/create-setores.dto.ts":
/*!***********************************************************!*\
  !*** ./src/controllers/setores/dto/create-setores.dto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateSetoresDTO = void 0;
class CreateSetoresDTO {
}
exports.CreateSetoresDTO = CreateSetoresDTO;


/***/ }),

/***/ "./src/controllers/setores/dto/update-setores.dto.ts":
/*!***********************************************************!*\
  !*** ./src/controllers/setores/dto/update-setores.dto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSetoresDto = void 0;
class UpdateSetoresDto {
}
exports.UpdateSetoresDto = UpdateSetoresDto;


/***/ }),

/***/ "./src/controllers/setores/setores.controller.ts":
/*!*******************************************************!*\
  !*** ./src/controllers/setores/setores.controller.ts ***!
  \*******************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constants_1 = __webpack_require__(/*! src/constants/constants */ "./src/constants/constants.ts");
const setores_service_1 = __webpack_require__(/*! ./setores.service */ "./src/controllers/setores/setores.service.ts");
const create_setores_dto_1 = __webpack_require__(/*! ./dto/create-setores.dto */ "./src/controllers/setores/dto/create-setores.dto.ts");
const update_setores_dto_1 = __webpack_require__(/*! ./dto/update-setores.dto */ "./src/controllers/setores/dto/update-setores.dto.ts");
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

/***/ "./src/controllers/setores/setores.module.ts":
/*!***************************************************!*\
  !*** ./src/controllers/setores/setores.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetoresModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const setores_controller_1 = __webpack_require__(/*! ./setores.controller */ "./src/controllers/setores/setores.controller.ts");
const setores_service_1 = __webpack_require__(/*! ./setores.service */ "./src/controllers/setores/setores.service.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/controllers/setores/setores.service.ts":
/*!****************************************************!*\
  !*** ./src/controllers/setores/setores.service.ts ***!
  \****************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const pagination_helper_1 = __webpack_require__(/*! src/helpers/pagination.helper */ "./src/helpers/pagination.helper.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/controllers/tipos-documentos/dto/create-tipos-documentos.dto.ts":
/*!*****************************************************************************!*\
  !*** ./src/controllers/tipos-documentos/dto/create-tipos-documentos.dto.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTiposDocumentosDTO = void 0;
class CreateTiposDocumentosDTO {
}
exports.CreateTiposDocumentosDTO = CreateTiposDocumentosDTO;


/***/ }),

/***/ "./src/controllers/tipos-documentos/tipos-documentos.controller.ts":
/*!*************************************************************************!*\
  !*** ./src/controllers/tipos-documentos/tipos-documentos.controller.ts ***!
  \*************************************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const tipos_documentos_service_1 = __webpack_require__(/*! ./tipos-documentos.service */ "./src/controllers/tipos-documentos/tipos-documentos.service.ts");
const create_tipos_documentos_dto_1 = __webpack_require__(/*! ./dto/create-tipos-documentos.dto */ "./src/controllers/tipos-documentos/dto/create-tipos-documentos.dto.ts");
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
    listOptions(descricao) {
        return this.service.listOptions(descricao);
    }
    findOne(id) {
        return this.service.find(+id);
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
    (0, common_1.Get)('/options'),
    __param(0, (0, common_1.Query)('descricao')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TiposDocumentosController.prototype, "listOptions", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TiposDocumentosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/find'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TiposDocumentosController.prototype, "find", null);
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

/***/ "./src/controllers/tipos-documentos/tipos-documentos.module.ts":
/*!*********************************************************************!*\
  !*** ./src/controllers/tipos-documentos/tipos-documentos.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TiposDocumentosModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const tipos_documentos_controller_1 = __webpack_require__(/*! ./tipos-documentos.controller */ "./src/controllers/tipos-documentos/tipos-documentos.controller.ts");
const tipos_documentos_service_1 = __webpack_require__(/*! ./tipos-documentos.service */ "./src/controllers/tipos-documentos/tipos-documentos.service.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/controllers/tipos-documentos/tipos-documentos.service.ts":
/*!**********************************************************************!*\
  !*** ./src/controllers/tipos-documentos/tipos-documentos.service.ts ***!
  \**********************************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const pagination_helper_1 = __webpack_require__(/*! src/helpers/pagination.helper */ "./src/helpers/pagination.helper.ts");
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
    listOptions(descricao) {
        return this.db.tiposDocumentos.findMany({
            where: { descricao: { contains: descricao, mode: 'insensitive' } },
            take: 10,
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

/***/ "./src/controllers/unidade_orcamentaria/dto/create-unidade-orcamentaria.dto.ts":
/*!*************************************************************************************!*\
  !*** ./src/controllers/unidade_orcamentaria/dto/create-unidade-orcamentaria.dto.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUnidadeOrcamentariaDTO = void 0;
class CreateUnidadeOrcamentariaDTO {
}
exports.CreateUnidadeOrcamentariaDTO = CreateUnidadeOrcamentariaDTO;


/***/ }),

/***/ "./src/controllers/unidade_orcamentaria/dto/update-unidade-orcamentaria.dto.ts":
/*!*************************************************************************************!*\
  !*** ./src/controllers/unidade_orcamentaria/dto/update-unidade-orcamentaria.dto.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUnidadeOrcamentariaDTO = void 0;
class UpdateUnidadeOrcamentariaDTO {
}
exports.UpdateUnidadeOrcamentariaDTO = UpdateUnidadeOrcamentariaDTO;


/***/ }),

/***/ "./src/controllers/unidade_orcamentaria/unidade-orcamentaria.controller.ts":
/*!*********************************************************************************!*\
  !*** ./src/controllers/unidade_orcamentaria/unidade-orcamentaria.controller.ts ***!
  \*********************************************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const unidade_orcamentaria_service_1 = __webpack_require__(/*! ./unidade-orcamentaria.service */ "./src/controllers/unidade_orcamentaria/unidade-orcamentaria.service.ts");
const session_decorator_1 = __webpack_require__(/*! src/customs/decorator/session.decorator */ "./src/customs/decorator/session.decorator.ts");
const create_unidade_orcamentaria_dto_1 = __webpack_require__(/*! ./dto/create-unidade-orcamentaria.dto */ "./src/controllers/unidade_orcamentaria/dto/create-unidade-orcamentaria.dto.ts");
const update_unidade_orcamentaria_dto_1 = __webpack_require__(/*! ./dto/update-unidade-orcamentaria.dto */ "./src/controllers/unidade_orcamentaria/dto/update-unidade-orcamentaria.dto.ts");
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

/***/ "./src/controllers/unidade_orcamentaria/unidade-orcamentaria.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/controllers/unidade_orcamentaria/unidade-orcamentaria.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnidadeOrcamentariaModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const unidade_orcamentaria_controller_1 = __webpack_require__(/*! ./unidade-orcamentaria.controller */ "./src/controllers/unidade_orcamentaria/unidade-orcamentaria.controller.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
const unidade_orcamentaria_service_1 = __webpack_require__(/*! ./unidade-orcamentaria.service */ "./src/controllers/unidade_orcamentaria/unidade-orcamentaria.service.ts");
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

/***/ "./src/controllers/unidade_orcamentaria/unidade-orcamentaria.service.ts":
/*!******************************************************************************!*\
  !*** ./src/controllers/unidade_orcamentaria/unidade-orcamentaria.service.ts ***!
  \******************************************************************************/
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
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
const prisma_service_1 = __webpack_require__(/*! ./../../services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const pagination_helper_1 = __webpack_require__(/*! src/helpers/pagination.helper */ "./src/helpers/pagination.helper.ts");
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
                    responsavel: data.responsavel.toUpperCase(),
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
                    responsavel: data.responsavel.toUpperCase(),
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
    async remove(id) {
        try {
            const unidadeOrcamentaria = await this.db.unidadeOrcamentaria.findUnique({
                where: { id: id },
            });
            if (!unidadeOrcamentaria) {
                return this.responseService.error('Unidade Orçamentária não encontrada!');
            }
            await this.db.unidadeOrcamentaria.delete({
                where: { id: id },
            });
            return this.responseService.success(null, 'Unidade Orçamentária excluída com sucesso!');
        }
        catch (error) {
            return this.responseService.error('Erro ao excluir a Unidade Orçamentária!', error.message);
        }
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

/***/ "./src/controllers/users/dto/create-users.dto.ts":
/*!*******************************************************!*\
  !*** ./src/controllers/users/dto/create-users.dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUsersDTO = void 0;
class CreateUsersDTO {
}
exports.CreateUsersDTO = CreateUsersDTO;


/***/ }),

/***/ "./src/controllers/users/dto/update-users.dto.ts":
/*!*******************************************************!*\
  !*** ./src/controllers/users/dto/update-users.dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUsersDto = void 0;
class UpdateUsersDto {
}
exports.UpdateUsersDto = UpdateUsersDto;


/***/ }),

/***/ "./src/controllers/users/users.controller.ts":
/*!***************************************************!*\
  !*** ./src/controllers/users/users.controller.ts ***!
  \***************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/controllers/users/users.service.ts");
const auth_guards_1 = __webpack_require__(/*! src/config/guards/auth.guards */ "./src/config/guards/auth.guards.ts");
const create_users_dto_1 = __webpack_require__(/*! ./dto/create-users.dto */ "./src/controllers/users/dto/create-users.dto.ts");
const update_users_dto_1 = __webpack_require__(/*! ./dto/update-users.dto */ "./src/controllers/users/dto/update-users.dto.ts");
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

/***/ "./src/controllers/users/users.module.ts":
/*!***********************************************!*\
  !*** ./src/controllers/users/users.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./src/controllers/users/users.controller.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/controllers/users/users.service.ts");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/controllers/users/users.service.ts":
/*!************************************************!*\
  !*** ./src/controllers/users/users.service.ts ***!
  \************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
const bcrypt_1 = __webpack_require__(/*! bcrypt */ "bcrypt");
const response_message_1 = __webpack_require__(/*! src/services/response-message */ "./src/services/response-message.ts");
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

/***/ "./src/customs/decorator/session.decorator.ts":
/*!****************************************************!*\
  !*** ./src/customs/decorator/session.decorator.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetSession = exports.Session = exports.SESSION_KEY = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.SESSION_KEY = 'session';
const Session = () => (0, common_1.SetMetadata)(exports.SESSION_KEY, true);
exports.Session = Session;
exports.GetSession = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.session;
});


/***/ }),

/***/ "./src/customs/interceptor/session.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/customs/interceptor/session.interceptor.ts ***!
  \********************************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const session_decorator_1 = __webpack_require__(/*! ../decorator/session.decorator */ "./src/customs/decorator/session.decorator.ts");
const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
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

/***/ "./src/entidades/entidades.controller.ts":
/*!***********************************************!*\
  !*** ./src/entidades/entidades.controller.ts ***!
  \***********************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const clients_1 = __webpack_require__(/*! src/config/clients */ "./src/config/clients.ts");
const database_guard_1 = __webpack_require__(/*! src/config/guards/database.guard */ "./src/config/guards/database.guard.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
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

/***/ "./src/entidades/entidades.module.ts":
/*!*******************************************!*\
  !*** ./src/entidades/entidades.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntidadesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const entidades_controller_1 = __webpack_require__(/*! ./entidades.controller */ "./src/entidades/entidades.controller.ts");
const prisma_service_1 = __webpack_require__(/*! src/services/prisma/prisma.service */ "./src/services/prisma/prisma.service.ts");
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

/***/ "./src/helpers/pagination.helper.ts":
/*!******************************************!*\
  !*** ./src/helpers/pagination.helper.ts ***!
  \******************************************/
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

/***/ "./src/pipes/validation.pipe.ts":
/*!**************************************!*\
  !*** ./src/pipes/validation.pipe.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationPipe = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
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

/***/ "./src/services/app-util.ts":
/*!**********************************!*\
  !*** ./src/services/app-util.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppUtil = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
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
    formatarCpf(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
};
exports.AppUtil = AppUtil;
exports.AppUtil = AppUtil = __decorate([
    (0, common_1.Injectable)()
], AppUtil);


/***/ }),

/***/ "./src/services/prisma/db-services.ts":
/*!********************************************!*\
  !*** ./src/services/prisma/db-services.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Already = void 0;
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const response_message_1 = __webpack_require__(/*! ../response-message */ "./src/services/response-message.ts");
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

/***/ "./src/services/prisma/prisma.service.ts":
/*!***********************************************!*\
  !*** ./src/services/prisma/prisma.service.ts ***!
  \***********************************************/
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const clients_1 = __webpack_require__(/*! src/config/clients */ "./src/config/clients.ts");
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

/***/ "./src/services/response-message.ts":
/*!******************************************!*\
  !*** ./src/services/response-message.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
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

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ })

/******/ 	});
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
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const session_interceptor_1 = __webpack_require__(/*! ./customs/interceptor/session.interceptor */ "./src/customs/interceptor/session.interceptor.ts");
const validation_pipe_1 = __webpack_require__(/*! ./pipes/validation.pipe */ "./src/pipes/validation.pipe.ts");
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
    app.useGlobalInterceptors(new session_interceptor_1.SessionInterceptor(new core_1.Reflector()));
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    await app.listen(3333);
}
bootstrap();

})();

/******/ })()
;