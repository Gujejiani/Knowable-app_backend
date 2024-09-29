import { AbstractRepository } from "common/common";
import { CourseEntity } from "./entities/course.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";
import { Injectable, Logger } from "@nestjs/common";




@Injectable()
export class CoursesRepository extends AbstractRepository<CourseEntity> {
    protected readonly logger = new Logger(CoursesRepository.name);

  constructor(@InjectRepository(CourseEntity) repository,  entityManager: EntityManager) {
    super(repository, entityManager);
  
  }
}