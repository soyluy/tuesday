// All authentication-related DTOs

import { LoginDto, RegisterDto } from '@tuesday/shared';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class RegisterDtoImpl implements RegisterDto {
    @IsString()
    @Length(2, 100)
    @IsNotEmpty()
    username!: string;

    @IsString()
    @Length(6, 100)
    @IsNotEmpty()
    password!: string;

    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsOptional()
    @IsString()
    fullName?: string;
}

export class LoginDtoImpl implements LoginDto {
    @IsString()
    @Length(2, 100)
    @IsNotEmpty()
    username!: string;

    @IsString()
    @Length(6, 100)
    @IsNotEmpty()
    password!: string;
}