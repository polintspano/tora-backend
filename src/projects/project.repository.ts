import { Injectable } from '@nestjs/common';
import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { Project } from './project.entity';

@Injectable()
export class ProjectRepository extends EntityRepository<Project> {
  constructor(em: EntityManager) {
    super(em, Project);
  }
}
