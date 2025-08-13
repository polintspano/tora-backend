import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { Organisation } from './organisation.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrganisationRepository extends EntityRepository<Organisation> {
  constructor(em: EntityManager) {
    super(em, Organisation);
  }
}
