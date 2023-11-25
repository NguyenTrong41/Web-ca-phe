import { Module } from '@nestjs/common';
import { DrinkController } from './drink.controller';
import { DrinkService } from './drink.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DrinkSchema } from './schema/drink.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: 'Drink',
        schema: DrinkSchema,
      }
    ]),
   ],
  controllers: [DrinkController],
  providers: [DrinkService]
})
export class DrinkModule {}
