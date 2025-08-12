import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRepository } from './user.repository';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './user.entity';

@Module({
  imports: [MikroOrmModule.forFeature([User])],
  providers: [UsersService, UserRepository],
})
export class UsersModule {}
