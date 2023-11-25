import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { DrinkService } from './drink.service';
import { CreateDrinkDto, UpdateDrinkDto } from './drink.dto';
import { Drink } from './schema/drink.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Query as ExpressQuery } from 'express-serve-static-core';
@Controller('drink')
export class DrinkController {
    constructor(private drinkService: DrinkService){}
    @Get()
    async getAllDrink(@Query() query: ExpressQuery): Promise<Drink[]> {
        return  this.drinkService.getAllDrinks(query);
    }
    @Get(':id')
    async getDrinkById(@Param('id') id: string): Promise<Drink>{
        return this.drinkService.getDrinkById(id);
    }

    @Post()
    async createDrink(@Body() drink: CreateDrinkDto ): Promise<Drink>{
        return this.drinkService.createDrink(drink);
    }
    @Put(':id')
    async updateDrinkById(@Param('id') id: string, @Body() drink: UpdateDrinkDto): Promise<Drink>{
        return this.drinkService.updateDrinkById(id, drink);
    }
    @Delete(':id')
    async deleteDrink(@Param('id') id:string): Promise<Drink>{
        return this.drinkService.deleteDrink(id);
    }
}
