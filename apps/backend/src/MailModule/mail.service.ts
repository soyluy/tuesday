import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

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
    }

    async sendWelcomeEmail(email: string, fullName: string): Promise<void> {
        // Logic to send a welcome email
        this.logger.log(`Sending welcome email to ${email} for ${fullName}`);
        // Here you would typically use a mailer service to send the email
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