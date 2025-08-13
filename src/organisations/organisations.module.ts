import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Organisation } from './organisation.entity';
import { OrganisationsService } from './organisations.service';
import { OrganisationRepository } from './organisation.repository';

@Module({
  imports: [MikroOrmModule.forFeature([Organisation])],
  providers: [OrganisationRepository, OrganisationsService],
})
export class OrganisationsModule {}
