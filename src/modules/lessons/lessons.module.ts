import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsResolver } from './lessons.resolver';
import { DatabaseModule } from 'common/common/database/database.module';
import { LessonEntity } from './entities/lesson.entity';

@Module({
  providers: [LessonsResolver, LessonsService],
  imports: [
    DatabaseModule.forFeature([
      LessonEntity
    ])
  ]

 
})
export class LessonsModule {}
