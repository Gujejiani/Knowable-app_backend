import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { DatabaseModule } from 'common/common/database/database.module';
import { CourseEntity } from './entities/course.entity';
import { CoursesRepository } from './course.repository';
import { CoursesResolver } from './courses.resolver';

@Module({
  controllers: [CoursesController],
  providers: [CoursesResolver,CoursesService, CoursesRepository],
  imports: [
     DatabaseModule.forFeature([
      CourseEntity,
     
    ]),
   
  ],
  exports: [ ]
})
export class CoursesModule {}
