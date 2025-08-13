import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { Attachment } from './attachment.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AttachmentRepository extends EntityRepository<Attachment> {
  constructor(em: EntityManager) {
    super(em, Attachment);
  }
}
