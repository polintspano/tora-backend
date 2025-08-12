import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { BoardsService } from './boards.service';

@Module({
  imports: [MikroOrmModule.forFeature([Board])],
  providers: [BoardRepository, BoardsService],
})
export class BoardsModule {}
