import { AbstractRepository } from "common/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";
import { Injectable, Logger } from "@nestjs/common";
import { UnitEntity } from "./entities/unit.entity";





@Injectable()
export class UnitsRepository extends AbstractRepository<UnitEntity> {
    protected readonly logger = new Logger(UnitsRepository.name);

  constructor(@InjectRepository(UnitEntity) repository,  entityManager: EntityManager) {
    super(repository, entityManager);
  
  }
}