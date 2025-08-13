import { Injectable } from '@nestjs/common';
import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { TaskAttachmentRelation } from './task-attachment-relation.entity';

@Injectable()
export class TaskAttachmentRelationRepository extends EntityRepository<TaskAttachmentRelation> {
  constructor(em: EntityManager) {
    super(em, TaskAttachmentRelation);
  }
}
