import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({
    timestamps: true
})
export class Admin{
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    status: number;
    

}
export const AdminSchema = SchemaFactory.createForClass(Admin)