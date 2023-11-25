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
exports.DrinkService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const drink_schema_1 = require("./schema/drink.schema");
const mongoose = require("mongoose");
let DrinkService = class DrinkService {
    constructor(drinkModel) {
        this.drinkModel = drinkModel;
    }
    async deleteDrink(id) {
        return await this.drinkModel.findByIdAndDelete(id);
    }
    async updateDrinkById(id, drink) {
        return await this.drinkModel.findByIdAndUpdate(id, drink, { new: true, runValidators: true, });
    }
    async createDrink(drink) {
        const res = await this.drinkModel.create(drink);
        return res;
    }
    async getDrinkById(id) {
        const drink = await this.drinkModel.findById(id);
        return drink;
    }
    async getAllDrinks(query) {
        const keyword = query.keyword ? {
            name: {
                $regex: query.keyword,
                $options: 'i',
            },
        } : {};
        const drinks = await this.drinkModel.find({ ...keyword });
        return drinks;
    }
};
exports.DrinkService = DrinkService;
exports.DrinkService = DrinkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(drink_schema_1.Drink.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], DrinkService);
//# sourceMappingURL=drink.service.js.map