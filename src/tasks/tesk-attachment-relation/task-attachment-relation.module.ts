import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TaskAttachmentRelation } from './task-attachment-relation.entity';
import { TaskAttachmentRelationRepository } from './task-attachment-relation.repository';

@Module({
  imports: [MikroOrmModule.forFeature([TaskAttachmentRelation])],
  providers: [TaskAttachmentRelationRepository],
})
export class TaskAttachmentRelationModule {}
