import {
  Entity,
  EntityRepositoryType,
  ManyToOne,
  Property,
} from '@mikro-orm/core';
import { Task } from '../task.entity';
import { TaskNetworkRepository } from './task-network.repository';

@Entity({ repository: () => TaskNetworkRepository })
export class TaskNetwork {
  [EntityRepositoryType]: TaskNetworkRepository;
  @ManyToOne(() => Task)
  parent: Task;

  @ManyToOne(() => Task)
  linkedWorkItem: Task;

  @Property()
  relation: string;
}
