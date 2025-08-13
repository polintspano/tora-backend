import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Team } from './team.entity';
import { TeamRepository } from './team.repository';
import { TeamsService } from './teams.service';

@Module({
  imports: [MikroOrmModule.forFeature([Team])],
  providers: [TeamRepository, TeamsService],
})
export class TeamsModule {}
