import { Drink } from './schema/drink.schema';
import { Query } from 'express-serve-static-core';
import * as mongoose from 'mongoose';
export declare class DrinkService {
    private drinkModel;
    constructor(drinkModel: mongoose.Model<Drink>);
    deleteDrink(id: string): Promise<Drink>;
    updateDrinkById(id: string, drink: Drink): Promise<Drink>;
    createDrink(drink: Drink): Promise<Drink>;
    getDrinkById(id: string): Promise<Drink>;
    getAllDrinks(query: Query): Promise<Drink[]>;
}
