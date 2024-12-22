import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsResolver } from './lessons.resolver';
import { DatabaseModule } from 'common/common/database/database.module';
import { LessonEntity } from './entities/lesson.entity';
import { LessonRepository } from './lesson.repository';
import { LessonsController } from './lessons.controller';

@Module({
  controllers: [LessonsController],
  providers: [LessonsResolver, LessonsService, LessonRepository],
  imports: [
    DatabaseModule.forFeature([
      LessonEntity
    ])
  ]

 
})
export class LessonsModule {}
