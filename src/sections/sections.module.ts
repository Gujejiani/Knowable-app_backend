import { Module } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { SectionsResolver } from './sections.resolver';
import { SectionsRepository } from './sections.repository';
import { CoursesModule } from 'src/courses/courses.module';
import { DatabaseModule } from 'common/common/database/database.module';
import { SectionEntity } from 'src/entities/section.entity';
import { UnitEntity } from 'src/entities/unit.entity';
import { UserProgressEntity } from 'src/entities/UserProgress.entity';
import { LessonEntity } from 'src/entities/lesson.entity';
import { ChallengeEntity } from 'src/entities/challenge.entity';
import { OptionEntity } from 'src/entities/options.entity';
import { UserEntity } from 'src/entities/user.entity';

@Module({
  providers: [SectionsResolver, SectionsService, SectionsRepository],
  imports: [
  
    DatabaseModule.forFeature([
      SectionEntity,
      UnitEntity,
      UserProgressEntity,
      LessonEntity,
      ChallengeEntity,
      OptionEntity,
      UserEntity
    ]),
    
    CoursesModule],
})
export class SectionsModule {}
