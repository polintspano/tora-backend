import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends EntityRepository<User> {
  constructor(em: EntityManager) {
    super(em, User);
  }
}
