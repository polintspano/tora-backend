import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { TaskUserRelation } from './task-user-relation.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskUserRelationRepository extends EntityRepository<TaskUserRelation> {
  constructor(em: EntityManager) {
    super(em, TaskUserRelation);
  }
}
