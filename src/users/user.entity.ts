import {
  Collection,
  Entity,
  EntityRepositoryType,
  ManyToMany,
  ManyToOne,
  OneToMany,
  Property,
} from '@mikro-orm/core';
import { UserRepository } from './user.repository';
import { Organisation } from '../organisations/organisation.entity';
import { Team } from '../teams/team.entity';
import { Task } from '../tasks/task.entity';

@Entity({ repository: () => UserRepository })
export class User {
  [EntityRepositoryType]: UserRepository;

  @Property()
  firstName: string;

  @Property()
  lastName: string;

  @Property({ unique: true })
  email: string;

  @Property()
  password: string;

  @Property()
  picture: string;

  @ManyToOne(() => Organisation)
  organisation: Organisation;

  @ManyToMany(() => Team, (team) => team.members)
  teams: Collection<Team> = new Collection(this);

  @Property()
  role: string;

  @Property()
  level: string;

  @OneToMany(() => Task, (task) => task.assignee)
  tasks: Collection<Task> = new Collection(this);
}
