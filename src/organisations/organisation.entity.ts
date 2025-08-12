import {
  Collection,
  Entity,
  EntityRepositoryType,
  OneToMany,
  Property,
} from '@mikro-orm/core';
import { User } from '../users/user.entity';
import { OrganisationRepository } from './organisation.repository';

@Entity({ repository: () => OrganisationRepository })
export class Organisation {
  [EntityRepositoryType]: OrganisationRepository;

  @Property({ unique: true })
  name: string;

  @OneToMany(() => User, (user) => user.organisation)
  members: Collection<User> = new Collection(this);

  @Property()
  projects: string;
}
