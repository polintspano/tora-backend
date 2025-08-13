import {
  Collection,
  Entity,
  EntityRepositoryType,
  ManyToOne,
  OneToMany,
  Property,
} from '@mikro-orm/core';
import { Project } from '../projects/project.entity';
import { Team } from '../teams/team.entity';
import { TaskRepository } from './task.repository';
import { TaskUserRelation } from './task-user-relation/task-user-relation.entity';
import { TaskNetwork } from './task-network/task-network.entity';
import { TaskAttachmentRelation } from './tesk-attachment-relation/task-attachment-relation.entity';

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

  @OneToMany(
    () => TaskUserRelation,
    (taskUserRelation) => taskUserRelation.task,
  )
  collaborators: Collection<TaskUserRelation> = new Collection(this);

  @Property()
  priority: string;

  @OneToMany(() => TaskNetwork, (taskNetwork) => taskNetwork.parent)
  outgoingRelations: TaskNetwork;

  @OneToMany(() => TaskNetwork, (taskNetwork) => taskNetwork.linkedWorkItem)
  incomingRelations: TaskNetwork;

  @Property()
  dueDate: Date;

  @Property()
  label: string;

  @ManyToOne(() => Team)
  team: Team;

  @Property()
  startDate: Date;

  @OneToMany(
    () => TaskAttachmentRelation,
    (taskAttachmentRelation) => taskAttachmentRelation.task,
  )
  attachments: Collection<TaskAttachmentRelation> = new Collection(this);

  @Property()
  restrictedTo: string;

  @Property()
  flagged: boolean;
}
