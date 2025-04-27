import {  Injectable, Logger } from '@nestjs/common';
import { UpdateCourseDto } from './dto/rest-dto/update-course.dto';
import { CoursesRepository } from './course.repository';
import { CourseEntity } from './entities/course.entity';
import { OnEvent } from '@nestjs/event-emitter';
import { CreateCourseDto } from './dto/rest-dto/create-course.dto';

@Injectable()
export class CoursesService {

  readonly logger = new Logger(CoursesService.name)
  constructor(private readonly courseRepository: CoursesRepository){}
  create(createCourseDto: CreateCourseDto) {

    const courseEntity = new CourseEntity(createCourseDto)
    return this.courseRepository.create(courseEntity)
  }

 async  findAll(loadRelations = true) {
    const relations = loadRelations
      ? { sections: { units: { lessons:  {
        challenges: {
          options: true
        }
      } } } }
      : {};
  
    try {
      return await this.courseRepository.find({}, relations);
    } catch (error) {
      // Handle or log the error
      this.logger.error('Error fetching courses:', error);
      throw new Error('Could not fetch courses');
    }
  }

  findOne(id: number, loadRelations = false) {
    const relations = loadRelations
    ? { sections: { units: { lessons:  {
      challenges: {
        options: true
      }
    } } } }
    : {};

    return this.courseRepository.findOne({ id: id,  }, relations);
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.courseRepository.findOneAndUpdate({id: id}, 
      updateCourseDto
    );
  }

  remove(id: number) {
    return this.courseRepository.findOneAndDelete({ id});
  }

  /**
   * 
   * @param courseId  The id of the course to check
   * @param resolve  The function to call when the check is complete
   */

  @OnEvent('course.exists.check')
  async handleCourseExistsCheck(courseId: number, resolve: (exists: boolean) => void) {
    const course = await this.courseRepository.findOne({ id: courseId });

    console.log('course exists:', !!course);
    resolve(!!course);
  }
}
