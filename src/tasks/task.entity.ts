import {
  Entity,
  EntityRepositoryType,
  ManyToOne,
  Property,
} from '@mikro-orm/core';
import { Project } from '../projects/project.entity';
import { User } from '../users/user.entity';
import { Team } from '../teams/team.entity';
import { TaskRepository } from './task.repository';

@Entity({ repository: () => TaskRepository })
export class Task {
  [EntityRepositoryType]: TaskRepository;

  @ManyToOne(() => Project)
  project: Project;

  @Property()
  workType: string;

  @Property()
  status: string;

  @Property()
  title: string;

  @Property()
  subTitle: string;

  @Property()
  description: string;

  @ManyToOne(() => User)
  assignee: User;

  @Property()
  priority: string;

  @Property()
  parent: Task;

  @Property()
  dueDate: Date;

  @Property()
  label: string;

  @ManyToOne(() => Team)
  team: Team;

  @Property()
  startDate: Date;

  @ManyToOne(() => User)
  reporter: User;

  @Property()
  attachments: string;

  @Property()
  linkedWorkItems: Task;

  @Property()
  restrictedTo: string;

  @Property()
  flagged: boolean;
}
