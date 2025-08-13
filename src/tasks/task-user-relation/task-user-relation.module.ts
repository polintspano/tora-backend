import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TaskUserRelation } from './task-user-relation.entity';
import { TaskUserRelationRepository } from './task-user-relation.repository';

@Module({
  imports: [MikroOrmModule.forFeature([TaskUserRelation])],
  providers: [TaskUserRelationRepository],
})
export class TaskUserRelationModule {}
