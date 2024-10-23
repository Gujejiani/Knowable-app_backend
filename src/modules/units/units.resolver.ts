import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UnitsService } from './units.service';
import { CreateUnitInput } from './dto/create-unit.input';
import { UpdateUnitInput } from './dto/update-unit.input';
import { UnitEntity } from './entities/unit.entity';

@Resolver(() => UnitEntity)
export class UnitsResolver {
  constructor(private readonly unitsService: UnitsService) {}

  @Mutation(() => UnitEntity)
  createUnit(@Args('createUnitInput') createUnitInput: CreateUnitInput) {
    return this.unitsService.create(createUnitInput);
  }

  @Query(() => [UnitEntity], { name: 'units' })
  findAll() {
    return this.unitsService.findAll();
  }

  @Query(() => UnitEntity, { name: 'unit' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.unitsService.findOne(id);
  }

  @Mutation(() => UnitEntity)
  updateUnit(@Args('updateUnitInput') updateUnitInput: UpdateUnitInput) {
    return this.unitsService.update(updateUnitInput.id, updateUnitInput);
  }

  @Mutation(() => UnitEntity)
  removeUnit(@Args('id', { type: () => Int }) id: number) {
    return this.unitsService.remove(id);
  }
}
