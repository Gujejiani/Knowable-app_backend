import { AbstractRepository } from "common/common";
import { ChallengeEntity } from "./entities/challenge.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";
import { Injectable, Logger } from "@nestjs/common";


@Injectable()
export class ChallengeRepository extends AbstractRepository<ChallengeEntity> {
    protected readonly logger = new Logger(ChallengeRepository.name);

  constructor(@InjectRepository(ChallengeEntity) repository,  entityManager: EntityManager) {
    super(repository, entityManager);
  
  }
}