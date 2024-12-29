import { AbstractRepository } from "common/common";
import { UserProgressEntity } from "./entities/user-progress.entity";
import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";


@Injectable()
export class UserProgressRepository extends AbstractRepository<UserProgressEntity> {
    protected readonly logger = new Logger(UserProgressRepository.name);

  constructor(@InjectRepository(UserProgressEntity) repository,  entityManager: EntityManager) {
    super(repository, entityManager);
  
  }
}