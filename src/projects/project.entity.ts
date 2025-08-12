import {
  Collection,
  Entity,
  EntityRepositoryType,
  ManyToMany,
  OneToMany,
  OneToOne,
  Property,
} from '@mikro-orm/core';
import { Team } from '../teams/team.entity';
import { ProjectRepository } from './project.repository';
import { Board } from '../boards/board.entity';
import { Task } from '../tasks/task.entity';

@Entity({ repository: () => ProjectRepository })
export class Project {
  [EntityRepositoryType]: ProjectRepository;

  @Property()
  name: string;

  @Property()
  description: string;

  @ManyToMany(() => Team, (team) => team.projects)
  teams: Collection<Team> = new Collection(this);

  @OneToMany(() => Task, (task) => task.project)
  tasks: Collection<Task> = new Collection(this);

  @OneToOne(() => Board)
  board: Board;
}
