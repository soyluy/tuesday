import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { LoginDto, RegisterDto } from '../dto/auth.dto';
import { User } from '../types/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { UserDocument } from '../schemas/user.schema';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<UserDocument>,
        private jwtService: JwtService
    ){}

    async registerLocal(registerDto: RegisterDto): Promise<string> {
        const registeringUser = {
            username: registerDto.username,
            email: registerDto.email,
            passwordHash: await argon2.hash(registerDto.password), // TODO: transform password to hash using pipes to avoid passing string passwords to the service
            fullName: registerDto.fullName ?? null, // Optional field, default to null if not provided.
        }
        
        const createdUser = new this.userModel(registeringUser);
        createdUser.save();
        return "OK"; // TODO: find a more appropriate return type
    }

    async loginLocal(loginDto: LoginDto): Promise<string> {
        const user = await this.userModel.findOne({ username: loginDto.username }).select('+passwordHash');
        if (!user) throw new NotFoundException('User not found');

        // TODO: Send an email to allow user to create a password.
        if(!user.passwordHash) throw new NotFoundException('User has no password. Please create one via TODO: Send email to create password.')

        const isPasswordValid = await argon2.verify(user.passwordHash, loginDto.password);
        if (!isPasswordValid) throw new UnauthorizedException('Invalid password');

        return this.jwtService.sign({ sub: user.userId, username: user.username });
    }
}
