import { Entity, EntityRepositoryType, ManyToOne } from '@mikro-orm/core';
import { Attachment } from '../../attachments/attachment.entity';
import { Task } from '../task.entity';
import { TaskAttachmentRelationRepository } from './task-attachment-relation.repository';

@Entity({ repository: () => TaskAttachmentRelationRepository })
export class TaskAttachmentRelation {
  [EntityRepositoryType]: TaskAttachmentRelationRepository;
  @ManyToOne(() => Attachment)
  attachment: Attachment;

  @ManyToOne(() => Task)
  task: Task;
}
