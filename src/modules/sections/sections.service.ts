import { Injectable } from '@nestjs/common';
import { CreateSectionInput } from './dto/create-section.input';
import { UpdateSectionInput } from './dto/update-section.input';
import { SectionsRepository } from './sections.repository';
import { CoursesService } from 'src/modules/courses/courses.service';
import { SectionEntity } from './entities/section.entity';
import { CreateSectionRestDto } from './dto/rest-dto/createSectionDto';

@Injectable()
export class SectionsService {

  constructor(private readonly sectionsRepository: SectionsRepository, private courseService: CoursesService){}


  async create(createSectionInput: CreateSectionInput | CreateSectionRestDto) {

  const course = await this.courseService.findOne(createSectionInput.courseId);
  if (!course) {
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
    const course = await this.courseService.findOne(updateSectionInput.courseId);

    updatedSectionEntity.course = course;



    return this.sectionsRepository.findOneAndUpdate({id: id}, 
      updatedSectionEntity
    );
  
  }

  remove(id: number) {
    return this.sectionsRepository.findOneAndDelete({ id});
    // return this.sectionsRepository.
  }
}
