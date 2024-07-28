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
        ],
        controllers: [],
        providers: [prisma_service_1.PrismaService, database_guard_1.DynamicDatabaseGuard],
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
            host: 'localhost',
            port: '5432',
            username: 'postgres',
            database: 'wilton-digitalizacao',
            password: '3640',
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
exports.jwtConstants = void 0;
exports.jwtConstants = {
    secret: '5bfca4a1474397f842accb61211ab197',
};


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
        const payload = { sub: user.id, username: user.login };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof response_message_1.ResponseService !== "undefined" && response_message_1.ResponseService) === "function" ? _c : Object])
], AuthService);


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SalasController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const salas_service_1 = __webpack_require__(/*! ./salas.service */ "./src/controllers/salas/salas.service.ts");
const auth_guards_1 = __webpack_require__(/*! src/config/guards/auth.guards */ "./src/config/guards/auth.guards.ts");
let SalasController = class SalasController {
    constructor(service) {
        this.service = service;
    }
    findAll() { }
};
exports.SalasController = SalasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SalasController.prototype, "findAll", null);
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
const controller_service_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../controller.service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
let SalasModule = class SalasModule {
};
exports.SalasModule = SalasModule;
exports.SalasModule = SalasModule = __decorate([
    (0, common_1.Module)({
        controllers: [salas_controller_1.SalasController],
        providers: [salas_service_1.SalasServices, prisma_service_1.PrismaService, controller_service_1.Controller],
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SalasServices = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let SalasServices = class SalasServices {
};
exports.SalasServices = SalasServices;
exports.SalasServices = SalasServices = __decorate([
    (0, common_1.Injectable)()
], SalasServices);


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
};
exports.AppUtil = AppUtil;
exports.AppUtil = AppUtil = __decorate([
    (0, common_1.Injectable)()
], AppUtil);


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

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

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
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3333);
}
bootstrap();

})();

/******/ })()
;