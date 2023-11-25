import { Body, Controller, Delete, Param, Post, Put , Get } from '@nestjs/common';
import { LoginAdminDto, RegisterAdminDto } from './admin.dto';
import { AdminService } from './admin.service';
import { Admin } from './admin.schema';

@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService){}
    @Post('register')
    register(@Body() registerAdminDto: RegisterAdminDto): Promise<Admin>{
        return this.adminService.register(registerAdminDto);
    }
    @Post('login')
    login(@Body() loginAdminDto: LoginAdminDto): Promise<any>{
        return this.adminService.login(loginAdminDto);
    }

    // @Post(':refresh-token')
    // refreshToken(@Body() {refresh_token}, @Body() loginAdminDto: LoginAdminDto): Promise<any>{
    //     return this.adminService.refreshToken(refresh_token, loginAdminDto);
    // }
    @Delete(':id')
    async delete(@Param('id') id:string): Promise<Admin>{
        return this.adminService.deleteAdmin(id);
    }
}
