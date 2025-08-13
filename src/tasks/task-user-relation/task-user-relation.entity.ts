import {
  Entity,
  EntityRepositoryType,
  ManyToOne,
  Property,
} from '@mikro-orm/core';
import { Task } from '../task.entity';
import { User } from '../../users/user.entity';
import { TaskUserRelationRepository } from './task-user-relation.repository';

@Entity({ repository: () => TaskUserRelationRepository })
export class TaskUserRelation {
  [EntityRepositoryType]: TaskUserRelationRepository;

  @ManyToOne(() => Task)
  task: Task;

  @ManyToOne(() => User)
  user: User;

  @Property()
  type: string;
}
