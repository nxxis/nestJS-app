import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    ReportsModule,
    MongooseModule.forRoot(
      'mongodb+srv://task-app:task-app@cluster0.gpgs8ft.mongodb.net/car-app?retryWrites=true&w=majority',
    ),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
