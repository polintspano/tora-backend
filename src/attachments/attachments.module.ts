import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Attachment } from './attachment.entity';
import { AttachmentRepository } from './attachment.repository';
import { AttachmentsService } from './attachments.service';

@Module({
  imports: [MikroOrmModule.forFeature([Attachment])],
  providers: [AttachmentRepository, AttachmentsService],
})
export class AttachmentsModule {}
