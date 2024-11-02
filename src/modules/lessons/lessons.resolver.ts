import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LessonsService } from './lessons.service';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';
import { LessonEntity } from './entities/lesson.entity';

@Resolver(() => LessonEntity)
export class LessonsResolver {
  constructor(private readonly lessonsService: LessonsService) {}

  @Mutation(() => LessonEntity)
  createLesson(@Args('createLessonInput') createLessonInput: CreateLessonInput) {
    return this.lessonsService.create(createLessonInput);
  }

  @Query(() => [LessonEntity], { name: 'lessons' })
  findAll() {
    return this.lessonsService.findAll();
  }

  @Query(() => LessonEntity, { name: 'lesson' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.lessonsService.findOne(id);
  }

  @Mutation(() => LessonEntity)
  updateLesson(@Args('updateLessonInput') updateLessonInput: UpdateLessonInput) {
    return this.lessonsService.update(updateLessonInput.id, updateLessonInput);
  }

  @Mutation(() => LessonEntity)
  removeLesson(@Args('id', { type: () => Int }) id: number) {
    return this.lessonsService.remove(id);
  }
}
