import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { DatabaseModule } from 'common/common/database/database.module';
import { CourseEntity } from './entities/course.entity';
import { CoursesRepository } from './course.repository';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, CoursesRepository],
  imports: [
     DatabaseModule.forFeature([
      CourseEntity,
     
    ]),
   
  ],
  exports: [CoursesService, CoursesRepository]
})
export class CoursesModule {}
