export class RegisterAdminDto{
    name: string;
    email: string;
    password: string;
    status: number;
}
export class LoginAdminDto{
    //npm i class-validator ho cho cho viec lay du lieu
    email: string;
    password: string;
}
export class UpdateAdminDto{
    id: string;
    name: string;
    email: string;
    password: string;
    status: number;
}