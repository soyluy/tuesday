export interface RegisterDto {
    username: string;
    password: string;
    email: string;
    fullName?: string;
}

export interface LoginDto {
    username: string;
    password: string;
}