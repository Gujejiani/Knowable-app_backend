import { Injectable } from '@nestjs/common';
import { CreateSectionInput } from './dto/create-section.input';
import { UpdateSectionInput } from './dto/update-section.input';
import { SectionsRepository } from './sections.repository';
import { CoursesService } from 'src/courses/courses.service';
import { SectionEntity } from './entities/section.entity';

@Injectable()
export class SectionsService {

  constructor(private readonly sectionsRepository: SectionsRepository, private courseService: CoursesService){}
 async create(createSectionInput: CreateSectionInput) {

      const sectionEntity = new SectionEntity();
      const course = await this.courseService.findOne(createSectionInput.courseId);

      sectionEntity.name.en = createSectionInput.name.en;
      sectionEntity.name.es = createSectionInput.name?.es;
      sectionEntity.course = course;





    return  this.sectionsRepository.create(sectionEntity);
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
