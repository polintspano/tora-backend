import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { TaskNetwork } from './task-network.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskNetworkRepository extends EntityRepository<TaskNetwork> {
  constructor(em: EntityManager) {
    super(em, TaskNetwork);
  }
}
