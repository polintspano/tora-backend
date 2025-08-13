import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';
import { TasksService } from './tasks.service';
import { TaskUserRelationModule } from './task-user-relation/task-user-relation.module';
import { TaskNetworkModule } from './task-network/task-network.module';
import { TaskAttachmentRelationModule } from './tesk-attachment-relation/task-attachment-relation.module';

@Module({
  imports: [
    MikroOrmModule.forFeature([Task]),
    TaskUserRelationModule,
    TaskNetworkModule,
    TaskAttachmentRelationModule,
  ],
  providers: [TaskRepository, TasksService],
})
export class TasksModule {}
