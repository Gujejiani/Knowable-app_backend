import { AbstractRepository } from "common/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";
import { Injectable, Logger } from "@nestjs/common";
import { OptionEntity } from "./entities/option.entity";




@Injectable()
export class OptionsRepository extends AbstractRepository<OptionEntity> {
    protected readonly logger = new Logger(OptionsRepository.name);

  constructor(@InjectRepository(OptionEntity) repository,  entityManager: EntityManager) {
    super(repository, entityManager);
  
  }
}