import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { Task } from './task.entity';

export class TaskRepository extends EntityRepository<Task> {
  constructor(em: EntityManager) {
    super(em, Task);
  }
}
