"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const admin_schema_1 = require("./admin.schema");
const mongoose_2 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let AdminService = class AdminService {
    constructor(adminModel, jwtService, configService) {
        this.adminModel = adminModel;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async register(registerAdminDto) {
        return await this.adminModel.create(registerAdminDto);
    }
    async login(loginAdminDto) {
        const { email, password } = loginAdminDto;
        const admin = await this.adminModel.findOne({ email });
        if (!admin) {
            throw new common_1.HttpException("Email is not exits", common_1.HttpStatus.UNAUTHORIZED);
        }
        const checkpassord = loginAdminDto.password;
        if (!checkpassord) {
            throw new common_1.HttpException("Password is not correct", common_1.HttpStatus.UNAUTHORIZED);
        }
        const payload = { id: admin.id, email: admin.email };
        const access_token = await this.jwtService.signAsync(payload);
        return { access_token };
    }
    async deleteAdmin(id) {
        return await this.adminModel.findByIdAndDelete(id);
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(admin_schema_1.Admin.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        jwt_1.JwtService,
        config_1.ConfigService])
], AdminService);
//# sourceMappingURL=admin.service.js.map