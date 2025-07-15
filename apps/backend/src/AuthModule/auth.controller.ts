import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from '../dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService:AuthService
    ){}


    /**
     * Endpoint to register a new user, using local authentication.
     * @param registerDto - Data transfer object containing registration details.
     * @returns The created user object.
     */
    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    async registerLocal(@Body() registerDto: RegisterDto){
        return await this.authService.registerLocal(registerDto)
    }

    /**
     * Endpoint to log in a user using local authentication.
     * @param loginDto - Data transfer object containing login credentials.
     * @returns A JWT token if login is successful.
     */
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async loginLocal(@Body() loginDto: LoginDto) {
        return await this.authService.loginLocal(loginDto);
    }
}
