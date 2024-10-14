import { Injectable } from '@nestjs/common';
import { CreateSectionInput } from './dto/create-section.input';
import { UpdateSectionInput } from './dto/update-section.input';
import { SectionsRepository } from './sections.repository';
import { SectionEntity } from './entities/section.entity';
import { CreateSectionRestDto } from './dto/rest-dto/createSectionDto';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class SectionsService {

  constructor(private readonly sectionsRepository: SectionsRepository, private readonly eventEmitter: EventEmitter2){}


  async create(createSectionInput: CreateSectionInput | CreateSectionRestDto) {

  const courseExist = await this.checkCourseExist(createSectionInput.courseId);
  if (!courseExist) {
    throw new Error('Course not found');
  }

  // Create SectionEntity with the given input and course association
  const sectionEntity = new SectionEntity({
    name: createSectionInput.name,
    courseId: createSectionInput.courseId,
  });
  return await this.sectionsRepository.create(sectionEntity);

  }

  findAll() {
    return  this.sectionsRepository.find({});
  }

  findOne(id: number) {
    return this.sectionsRepository.findOne({ id: id });
  }

  async update(id: number, updateSectionInput: UpdateSectionInput) {

    const updatedSectionEntity = await this.sectionsRepository.findOne({ id: id });

    updatedSectionEntity.name.en = updateSectionInput.name.en;
    updatedSectionEntity.name.es = updateSectionInput.name?.es;
    const course = await this.checkCourseExist(updateSectionInput.courseId);

    if (!course) {
      throw new Error('Course not found');
    }

    updatedSectionEntity.courseId =  updateSectionInput.courseId;



    return this.sectionsRepository.findOneAndUpdate({id: id}, 
      updatedSectionEntity
    );
  
  }

  remove(id: number) {
    return this.sectionsRepository.findOneAndDelete({ id});
    // return this.sectionsRepository.
  }


  checkCourseExist(courseId: number): Promise<boolean> {
  return   new Promise<boolean>((resolve, )=>{
      this.eventEmitter.emit('course.exists.check', courseId, resolve);
   })
  }
}
