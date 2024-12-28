import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OptionsService } from './options.service';
import { CreateOptionInput } from './dto/create-option.input';
import { UpdateOptionInput } from './dto/update-option.input';
import { OptionEntity } from './entities/option.entity';

@Resolver(() => OptionEntity)
export class OptionsResolver {
  constructor(private readonly optionsService: OptionsService) {}

  @Mutation(() => OptionEntity)
  createOption(@Args('createOptionInput') createOptionInput: CreateOptionInput) {
    return this.optionsService.create(createOptionInput);
  }

  @Query(() => [OptionEntity], { name: 'options' })
  findAll() {
    return this.optionsService.findAll();
  }

  @Query(() => OptionEntity, { name: 'option' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.optionsService.findOne(id);
  }

  @Mutation(() => OptionEntity)
  updateOption(@Args('updateOptionInput') updateOptionInput: UpdateOptionInput) {
    return this.optionsService.update(updateOptionInput.id, updateOptionInput);
  }

  @Mutation(() => OptionEntity)
  removeOption(@Args('id', { type: () => Int }) id: number) {
    return this.optionsService.remove(id);
  }
}
