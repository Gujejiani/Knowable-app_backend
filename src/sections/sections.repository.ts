import { AbstractRepository } from "common/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";
import { Injectable, Logger } from "@nestjs/common";
import { SectionEntity } from "src/entities/section.entity";




@Injectable()
export class SectionsRepository extends AbstractRepository<SectionEntity> {
    protected readonly logger = new Logger(SectionsRepository.name);

  constructor(@InjectRepository(SectionEntity) repository,  entityManager: EntityManager) {
    super(repository, entityManager);
  
  }
}