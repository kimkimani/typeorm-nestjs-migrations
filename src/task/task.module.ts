// Import modules and components
import { Module } from '@nestjs/common'; 
import { TaskService } from './task.service'; 
import { TaskController } from './task.controller'; 
// TypeOrmModule creates your database integration
import { TypeOrmModule } from '@nestjs/typeorm'; 
// Your Task entity class
import { Task } from './task.entity';

@Module({
  // create an import module
  // add TypeOrmModule to Task entity
  imports: [TypeOrmModule.forFeature([Task])], 
  providers: [TaskService],
  controllers: [TaskController]
})
export class TaskModule {} 
