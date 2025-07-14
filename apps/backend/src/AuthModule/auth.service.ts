import { Injectable } from '@nestjs/common';
import { RegisterDto } from '../dto/auth.dto';
import { User } from '../types/User';

@Injectable()
export class AuthService {

    async register(registerDto: RegisterDto): Promise<User> {

        // TODO: Implement actual user registration logic here.
        return {
            id: Date.now(), // Simulating an ID for the user
            username: registerDto.username,
            email: registerDto.email,
            fullName: registerDto.fullName || undefined, // Optional field
        };
    }
}
