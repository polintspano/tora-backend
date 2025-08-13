import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { Board } from './board.entity';

export class BoardRepository extends EntityRepository<Board> {
  constructor(em: EntityManager) {
    super(em, Board);
  }
}
