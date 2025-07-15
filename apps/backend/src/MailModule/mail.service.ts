import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { welcomeEmailTemplate } from './templates/welcome.email';

@Injectable()
export class MailService {
    private readonly logger = new Logger(MailService.name);
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
        if(process.env.NODE_ENV === 'testing') {
            this.sendTestEmail(process.env.TEST_EMAIL || 'bombos1987@gmail.com'); // send to my junk email if not set
        }
    }

    async sendWelcomeEmail(email: string, name: string): Promise<void> {
        // Logic to send a welcome email
        this.logger.log(`Sending welcome email to ${email} for ${name}`);
        
        try {
            await this.transporter.sendMail({
                from: process.env.MAIL_USER,
                to: email,
                subject: 'Welcome to Our Service',
                html: welcomeEmailTemplate(name, 'https://youtu.be/dQw4w9WgXcQ?si=33MZ1Xn-CIv8Y2QQ'),
            });
            this.logger.log('Welcome email sent successfully');
        } catch (error) {
            this.logger.error('Error sending welcome email', error);
            throw error;
        }
    }

    async sendPasswordResetEmail(email: string, resetLink: string): Promise<void> {
        // Logic to send a password reset email
        this.logger.log(`Sending password reset email to ${email} with link: ${resetLink}`);
        // Here you would typically use a mailer service to send the email
    }

    async sendVerificationEmail(email: string, verificationLink: string): Promise<void> {
        // Logic to send an email verification link
        this.logger.log(`Sending verification email to ${email} with link: ${verificationLink}`);
        // Here you would typically use a mailer service to send the email
    }

    async sendNotificationEmail(email: string, subject: string, message: string): Promise<void> {
        // Logic to send a notification email
        this.logger.log(`Sending notification email to ${email} with subject: ${subject}`);
        // Here you would typically use a mailer service to send the email
    }

    async sendLoginEmail(email: string, loginDetails: string): Promise<void> {
        // Logic to send a login notification email
        this.logger.log(`Sending login notification email to ${email} with details: ${loginDetails}`);
        // Here you would typically use a mailer service to send the email
    }

    private async sendTestEmail(to: string): Promise<void> {
        // Logic to send a test email
        this.logger.log(`Sending test email to ${to}`);
        try {
            await this.transporter.sendMail({
                from: process.env.MAIL_USER,
                to: to,
                subject: 'Test Email',
                text: 'This is a test email',
            });
            this.logger.log('Test email sent successfully');
        } catch (error) {
            this.logger.error('Error sending test email', error);
        }
    }
}