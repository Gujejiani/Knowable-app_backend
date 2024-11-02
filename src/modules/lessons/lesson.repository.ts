import { AbstractRepository } from "common/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";
import { Injectable, Logger } from "@nestjs/common";
import { LessonEntity } from "./entities/lesson.entity";




@Injectable()
export class LessonRepository extends AbstractRepository<LessonEntity> {
    protected readonly logger = new Logger(LessonRepository.name);

  constructor(@InjectRepository(LessonEntity) repository,  entityManager: EntityManager) {
    super(repository, entityManager);
  
  }
}