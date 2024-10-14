import {  Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CoursesRepository } from './course.repository';
import { CourseEntity } from './entities/course.entity';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class CoursesService {

  constructor(private readonly courseRepository: CoursesRepository){}
  create(createCourseDto: CreateCourseDto) {

    const courseEntity = new CourseEntity(createCourseDto)
    return this.courseRepository.create(courseEntity)
  }

  findAll() {
    return this.courseRepository.find({});
  }

  findOne(id: number) {
    return this.courseRepository.findOne({ id: id });
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.courseRepository.findOneAndUpdate({id: id}, 
      updateCourseDto
    );
  }

  remove(id: number) {
    return this.courseRepository.findOneAndDelete({ id});
  }

  @OnEvent('course.exists.check')
  async handleCourseExistsCheck(courseId: number, resolve: (exists: boolean) => void) {
    const course = await this.courseRepository.findOne({ id: courseId });

    console.log('course exists:', !!course);
    resolve(!!course);
  }
}
