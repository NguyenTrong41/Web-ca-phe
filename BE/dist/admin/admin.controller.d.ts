import { LoginAdminDto, RegisterAdminDto } from './admin.dto';
import { AdminService } from './admin.service';
import { Admin } from './admin.schema';
export declare class AdminController {
    private adminService;
    constructor(adminService: AdminService);
    register(registerAdminDto: RegisterAdminDto): Promise<Admin>;
    login(loginAdminDto: LoginAdminDto): Promise<any>;
    delete(id: string): Promise<Admin>;
}
