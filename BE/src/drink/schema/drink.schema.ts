import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({
    timestamps: true
})
export class Drink{
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    img: string;

    @Prop()
    price: string;
    

}
export const DrinkSchema = SchemaFactory.createForClass(Drink)