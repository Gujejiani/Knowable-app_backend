import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { DatabaseModule } from 'common/common/database/database.module';
import { CourseEntity } from './entities/course.entity';
import { CoursesRepository } from './course.repository';
import { Section } from 'src/entities/section.entity';
import { Challenge } from 'src/entities/challenge.entity';
import { Unit } from 'src/entities/unit.entity';
import { Option } from 'src/entities/options.entity';
import { Lesson } from 'src/entities/lesson.entity';
import { UserProgress } from 'src/entities/UserProgress.entity';
import { User } from 'src/entities/user.entity';
@Module({
  controllers: [CoursesController],
  providers: [CoursesService, CoursesRepository],
  imports: [
    DatabaseModule, DatabaseModule.forFeature([
      CourseEntity,
      Section,
      Challenge,
      Option,
      Unit,
      Challenge,
      Lesson,
      UserProgress,
      User
    ]),
  ]
})
export class CoursesModule {}
