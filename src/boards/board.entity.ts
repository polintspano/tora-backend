import {
  Entity,
  EntityRepositoryType,
  OneToOne,
  Property,
} from '@mikro-orm/core';
import { Project } from '../projects/project.entity';
import { BoardRepository } from './board.repository';

@Entity({ repository: () => BoardRepository })
export class Board {
  [EntityRepositoryType]: BoardRepository;

  @Property()
  name: string;

  @Property()
  columns: string[];

  @OneToOne(() => Project, (project) => project.board)
  project: Project;
}
