import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';
import { TasksService } from './tasks.service';

@Module({
  imports: [MikroOrmModule.forFeature([Task])],
  providers: [TaskRepository, TasksService],
})
export class TasksModule {}
