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
exports.DrinkController = void 0;
const common_1 = require("@nestjs/common");
const drink_service_1 = require("./drink.service");
const drink_dto_1 = require("./drink.dto");
let DrinkController = class DrinkController {
    constructor(drinkService) {
        this.drinkService = drinkService;
    }
    async getAllDrink(query) {
        return this.drinkService.getAllDrinks(query);
    }
    async getDrinkById(id) {
        return this.drinkService.getDrinkById(id);
    }
    async createDrink(drink) {
        return this.drinkService.createDrink(drink);
    }
    async updateDrinkById(id, drink) {
        return this.drinkService.updateDrinkById(id, drink);
    }
    async deleteDrink(id) {
        return this.drinkService.deleteDrink(id);
    }
};
exports.DrinkController = DrinkController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DrinkController.prototype, "getAllDrink", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DrinkController.prototype, "getDrinkById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [drink_dto_1.CreateDrinkDto]),
    __metadata("design:returntype", Promise)
], DrinkController.prototype, "createDrink", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, drink_dto_1.UpdateDrinkDto]),
    __metadata("design:returntype", Promise)
], DrinkController.prototype, "updateDrinkById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DrinkController.prototype, "deleteDrink", null);
exports.DrinkController = DrinkController = __decorate([
    (0, common_1.Controller)('drink'),
    __metadata("design:paramtypes", [drink_service_1.DrinkService])
], DrinkController);
//# sourceMappingURL=drink.controller.js.map