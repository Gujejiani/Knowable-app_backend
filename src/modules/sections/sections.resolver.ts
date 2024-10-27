import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SectionsService } from './sections.service';
import { CreateSectionInput } from './dto/create-section.input';
import { UpdateSectionInput } from './dto/update-section.input';
import { SectionEntity } from './entities/section.entity';

@Resolver(() => SectionEntity)
export class SectionsResolver {
  
  constructor(private readonly sectionsService: SectionsService) {}

  @Mutation(() => SectionEntity)
  async createSection(@Args('createSectionInput') createSectionInput: CreateSectionInput) {
    console.log('Received createSectionInput:', createSectionInput);
    if (!createSectionInput) {
      throw new Error("createSectionInput is missing");
    }
    return this.sectionsService.create(createSectionInput);
  }

  @Query(() => [SectionEntity], { name: 'sections' })
  findAll() {
    return this.sectionsService.findAll();
  }

  @Query(() => SectionEntity, { name: 'section' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sectionsService.findOne(id);
  }

  @Mutation(() => SectionEntity)
  updateSection(@Args('updateSectionInput') updateSectionInput: UpdateSectionInput) {
    return this.sectionsService.update(updateSectionInput.id, updateSectionInput);
  }

  @Mutation(() => SectionEntity)
  removeSection(@Args('id', { type: () => Int }) id: number) {
    return this.sectionsService.remove(id);
  }
}
