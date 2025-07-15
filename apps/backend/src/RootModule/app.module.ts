import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../AuthModule/auth.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
        process.env.MONGO_URI || 'mongodb://127.0.0.1:27017', // Default to local MongoDB if no URI is provided
        {
          user: process.env.MONGO_USER,
          pass: process.env.MONGO_PASSWORD,
          dbName: process.env.MONGO_DB_NAME || 'test',
        },
      ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
