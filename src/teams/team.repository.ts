import { Injectable } from '@nestjs/common';
import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { Team } from './team.entity';

@Injectable()
export class TeamRepository extends EntityRepository<Team> {
  constructor(em: EntityManager) {
    super(em, Team);
  }
}
