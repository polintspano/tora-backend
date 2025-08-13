import {
  Collection,
  Entity,
  EntityRepositoryType,
  ManyToMany,
  OneToMany,
  Property,
} from '@mikro-orm/core';
import { User } from '../users/user.entity';
import { TeamRepository } from './team.repository';
import { Project } from '../projects/project.entity';
import { Task } from '../tasks/task.entity';

@Entity({ repository: () => TeamRepository })
export class Team {
  [EntityRepositoryType]: TeamRepository;

  @Property()
  name: string;

  @ManyToMany(() => User, (user) => user.teams)
  members: Collection<User> = new Collection(this);

  @ManyToMany(() => Project, (project) => project.teams)
  projects: Collection<Project> = new Collection(this);

  @OneToMany(() => Task, (task) => task.team)
  tasks: Collection<Task> = new Collection(this);
}
