import { Injectable } from '@nestjs/common';
import { UpdateLessonInput } from './dto/update-lesson.input';
import { LessonRepository } from './lesson.repository';
import {  LessonEntity, } from './entities/lesson.entity';
import { CreateLessonDto } from './dto/rest-dto/create-lesson.dto';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonDto } from './dto/rest-dto/update-lesson.dto';
import { FindOptionsRelations } from 'typeorm';

@Injectable()
export class LessonsService {
  constructor(private readonly lessonRepository: LessonRepository){}

  
  create(createLessonDto: CreateLessonInput) {
    const lessonEntity = new LessonEntity(createLessonDto);

    return  this.lessonRepository.create(lessonEntity);
  }
  
  createRest(createLessonDto: CreateLessonDto) {
    const lessonEntity = new LessonEntity(createLessonDto);

    return  this.lessonRepository.create(lessonEntity)
  }

  updateRest(id: number, updateLessonInput: UpdateLessonDto) {
    return this.lessonRepository.findOneAndUpdate({id: id}, 
      updateLessonInput
    );
  }

  findAll(relations?: FindOptionsRelations<LessonEntity>) {
    return this.lessonRepository.find({}, relations);
  }

  findOne(id: number) {
    return this.lessonRepository.findOne({ id: id });
  }
  
  update(id: number, updateLessonInput: UpdateLessonInput) {
    return this.lessonRepository.findOneAndUpdate({id: id}, 
      updateLessonInput
    );
  }

  

  remove(id: number) {
    return this.lessonRepository.findOneAndDelete({ id});
  }
}
