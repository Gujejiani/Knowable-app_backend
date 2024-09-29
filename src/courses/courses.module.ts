import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { DatabaseModule } from 'common/common/database/database.module';
import { CourseEntity } from './entities/course.entity';
import { CoursesRepository } from './course.repository';
import { SectionEntity } from 'src/entities/section.entity';
import { ChallengeEntity } from 'src/entities/challenge.entity';
import { UnitEntity } from 'src/entities/unit.entity';
import { OptionEntity } from 'src/entities/options.entity';
import { LessonEntity } from 'src/entities/lesson.entity';
import { UserProgressEntity } from 'src/entities/UserProgress.entity';
import { UserEntity } from 'src/entities/user.entity';
@Module({
  controllers: [CoursesController],
  providers: [CoursesService, CoursesRepository],
  imports: [
    DatabaseModule, DatabaseModule.forFeature([
      CourseEntity,
      SectionEntity,
      ChallengeEntity,
      OptionEntity,
      UnitEntity,
      LessonEntity,
      UserProgressEntity,
      UserEntity
    ]),
  ]
})
export class CoursesModule {}
