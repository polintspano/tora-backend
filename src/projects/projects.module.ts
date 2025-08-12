import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Project } from './project.entity';
import { ProjectRepository } from './project.repository';
import { ProjectsService } from './projects.service';

@Module({
  imports: [MikroOrmModule.forFeature([Project])],
  providers: [ProjectRepository, ProjectsService],
})
export class ProjectsModule {}
