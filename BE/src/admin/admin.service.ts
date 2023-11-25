import { Catch, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginAdminDto, RegisterAdminDto } from './admin.dto';
import mongoose, { Model } from 'mongoose';
import { Admin } from './admin.schema';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AdminService {
    loginAdminDto: any;
    constructor(
        @InjectModel(Admin.name)
        private adminModel: Model<Admin>,
        private jwtService: JwtService,
        private configService:  ConfigService
    ){}
    async register(registerAdminDto: RegisterAdminDto): Promise<Admin>{
        return await this.adminModel.create(registerAdminDto);
    }
    async login(loginAdminDto: LoginAdminDto): Promise<any>{
        const {email, password} = loginAdminDto;
        const admin = await this.adminModel.findOne({email})
        if(!admin){
            throw new HttpException("Email is not exits", HttpStatus.UNAUTHORIZED);
        }
        const checkpassord = loginAdminDto.password;
        if(!checkpassord){
            throw new HttpException("Password is not correct", HttpStatus.UNAUTHORIZED);
        }
        //generaret access token and refresh token {npm i @nestjs/jwt}
        const payload = {id: admin.id, email: admin.email};
        // return this.generaretToken(payload);
        const access_token = await this.jwtService.signAsync(payload);
        
        return {access_token};
    }
    // async refreshToken(refresh_token: string, loginAdminDto: LoginAdminDto): Promise<any>{
    //     const {email, password} = loginAdminDto;
    //     try{
    //         const verify = await this.jwtService.verifyAsync(refresh_token,{secret: this.configService.get<string>('JWT_SECRET')})
            
    //         const checkExistToken = await this.adminModel.findOne({email: verify.email, refresh_token})
    //         if (checkExistToken) {
    //             console.log(verify);
    //             return this.generaretToken({id: verify.id, email: verify.email})
                
    //         }
    //     }catch(error){
    //         throw new HttpException('Refresh token is not valid', HttpStatus.BAD_REQUEST);
    //     }
    // }
    // private async generaretToken(payload:{id: string, email: string}){
    //     const access_token = await this.jwtService.signAsync(payload);
    //     const refresh_token = await this.jwtService.signAsync(payload,{
    //         secret: this.configService.get<string>('JWT_SECRET') ,
    //         expiresIn: this.configService.get<string>('JWT_EXPIRES')
    //     })
    //     await this.adminModel.updateOne(
    //         {email:payload.email},
    //         {refresh_token: refresh_token}
    //     )
    //     return {access_token, refresh_token};
    // }
    
    async deleteAdmin(id: string): Promise<Admin> {
        return await this.adminModel.findByIdAndDelete(id);
        
    }
}
