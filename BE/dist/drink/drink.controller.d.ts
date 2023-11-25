import { DrinkService } from './drink.service';
import { CreateDrinkDto, UpdateDrinkDto } from './drink.dto';
import { Drink } from './schema/drink.schema';
import { Query as ExpressQuery } from 'express-serve-static-core';
export declare class DrinkController {
    private drinkService;
    constructor(drinkService: DrinkService);
    getAllDrink(query: ExpressQuery): Promise<Drink[]>;
    getDrinkById(id: string): Promise<Drink>;
    createDrink(drink: CreateDrinkDto): Promise<Drink>;
    updateDrinkById(id: string, drink: UpdateDrinkDto): Promise<Drink>;
    deleteDrink(id: string): Promise<Drink>;
}
