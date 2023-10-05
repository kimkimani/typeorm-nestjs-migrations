import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'; 
import { TaskModule } from './task/task.module';
// Import the Task entity class

// TypeOrmModule database integration
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { dbdatasource } from './task/data.source';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbdatasource),
    TaskModule,
  ],
  controllers: [AppController], 
  providers: [AppService], 
})

export class AppModule {} 
