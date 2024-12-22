import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CourseEntity } from './entities/course.entity';
import { CoursesService } from './courses.service';

import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';


@Resolver(() => CourseEntity)
export class CoursesResolver {
  constructor(private readonly coursesService: CoursesService) {}

  @Mutation(() => CourseEntity)
  async createCourse(@Args('createCourseInput') createCourseInput: CreateCourseInput) {
    console.log('Received createCourseInput:', createCourseInput);
    if (!createCourseInput) {
      throw new Error("createCourseInput is missing");
    }
    return this.coursesService.create(createCourseInput);
  }

  @Query(() => [CourseEntity], { name: 'courses' })
  findAll() {
    return this.coursesService.findAll();
  }

  @Query(() => CourseEntity, { name: 'course' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.coursesService.findOne(id);
  }

  @Mutation(() => CourseEntity)
  updateSection(@Args('updateCourseInput') updateCourseInput: UpdateCourseInput) {
    return this.coursesService.update(updateCourseInput.id, updateCourseInput);
  }

  @Mutation(() => CourseEntity)
  removeSection(@Args('id', { type: () => Int }) id: number) {
    return this.coursesService.remove(id);
  }
}
