import { LoginAdminDto, RegisterAdminDto } from './admin.dto';
import { Model } from 'mongoose';
import { Admin } from './admin.schema';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AdminService {
    private adminModel;
    private jwtService;
    private configService;
    loginAdminDto: any;
    constructor(adminModel: Model<Admin>, jwtService: JwtService, configService: ConfigService);
    register(registerAdminDto: RegisterAdminDto): Promise<Admin>;
    login(loginAdminDto: LoginAdminDto): Promise<any>;
    deleteAdmin(id: string): Promise<Admin>;
}
