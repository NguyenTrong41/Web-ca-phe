import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminSchema } from './admin.schema'
import { JwtModule } from '@nestjs/jwt/dist'; // npm i @nestjs/jwt de tai
import { PassportModule } from '@nestjs/passport';// npm i --save @nestjs/passport passport passport-local va npm i --save-dev @types/passport-local de tai
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'process';

@Module({
    imports:[
        PassportModule.register({defaultStrategy: 'jwt'}),
        MongooseModule.forFeature([
          {
            name: 'Admin',
            schema: AdminSchema,
          }
        ]),
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory : (config: ConfigService) => {
                return{
                    secret: config.get<string>('JWT_SECRET'),
                    signOptions: {
                        expiresIn: config.get<string | number>('JWT_EXPIRES'),
                    }
                }
            }
        }),
        ConfigModule
       ],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
