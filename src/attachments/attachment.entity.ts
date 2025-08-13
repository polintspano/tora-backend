import { Entity, EntityRepositoryType, Property } from '@mikro-orm/core';
import { AttachmentRepository } from './attachment.repository';

@Entity({ repository: () => AttachmentRepository })
export class Attachment {
  [EntityRepositoryType]: AttachmentRepository;
  @Property()
  name: string;

  @Property()
  type: string;

  @Property()
  url: string;

  @Property()
  bucket: string;
}
