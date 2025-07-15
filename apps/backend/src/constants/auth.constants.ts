export const jwtConstants = {
    secret: process.env.JWT_SECRET || 'defaultSecret', // Default secret for JWT, should be overridden in production
}