import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TaskNetwork } from './task-network.entity';
import { TaskNetworkRepository } from './task-network.repository';

@Module({
  imports: [MikroOrmModule.forFeature([TaskNetwork])],
  providers: [TaskNetworkRepository],
})
export class TaskNetworkModule {}
