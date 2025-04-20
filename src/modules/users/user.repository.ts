import { AbstractRepository } from "common/common";
import { UserEntity } from "./entities/user.entity";
import { Logger } from "@nestjs/common";
import { EntityManager } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";



export class UserRepository extends AbstractRepository<UserEntity> {
    protected readonly logger = new Logger(UserRepository.name);

    constructor(@InjectRepository(UserEntity) repository,  entityManager: EntityManager) {
        super(repository, entityManager);
      
      }
}