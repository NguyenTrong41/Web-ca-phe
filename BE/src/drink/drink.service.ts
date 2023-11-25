import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Drink } from './schema/drink.schema';
import { Query } from 'express-serve-static-core';
import * as mongoose from 'mongoose';
@Injectable()
export class DrinkService {
    constructor(
        @InjectModel(Drink.name)
        private drinkModel: mongoose.Model<Drink>
    ){}
    
    async deleteDrink(id: string): Promise<Drink> {
        return await this.drinkModel.findByIdAndDelete(id);
        
    }
    async updateDrinkById(id: string, drink: Drink): Promise<Drink> {
        return await this.drinkModel.findByIdAndUpdate(id, drink, {new: true, runValidators: true,});

    }
    async createDrink(drink: Drink): Promise<Drink> {
        const res = await this.drinkModel.create(drink);
        return res;
    }
    async getDrinkById(id: string): Promise<Drink> {
        const drink = await this.drinkModel.findById(id);

        // if(!drink) throw new NotFoundException('Drink not found.');

        return drink;
    }

    async getAllDrinks(query: Query): Promise<Drink[]> {
        // const resPerPage = 2;
        // const currentPage = Number(query.page) || 1 ;
        // const skip = resPerPage * (currentPage - 1);
        const keyword = query.keyword ? {
            name:{
                $regex: query.keyword,
                $options: 'i',
            },
        } : {}
        const drinks = await this.drinkModel.find({...keyword});
        //const drinks = await this.drinkModel.find({...keyword}).limit(resPerPage).skip(skip);
        return drinks;
    }
    

}
