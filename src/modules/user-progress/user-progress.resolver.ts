import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserProgressService } from './user-progress.service';
import { CreateUserProgressInput } from './dto/create-user-progress.input';
import { UpdateUserProgressInput } from './dto/update-user-progress.input';
import { UserProgressEntity } from './entities/user-progress.entity';

@Resolver(() => UserProgressEntity)
export class UserProgressResolver {
  constructor(private readonly userProgressService: UserProgressService) {}

  @Mutation(() => UserProgressEntity)
  createUserProgress(@Args('createUserProgressInput') createUserProgressInput: CreateUserProgressInput) {
    return this.userProgressService.create(createUserProgressInput);
  }

  @Query(() => [UserProgressEntity], { name: 'GetAllUserProgress' })
  findAll() {
    return this.userProgressService.findAll();
  }

  @Query(() => UserProgressEntity, { name: 'userProgress' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userProgressService.findOne(id);
  }

  @Mutation(() => UserProgressEntity)
  updateUserProgress(@Args('updateUserProgressInput') updateUserProgressInput: UpdateUserProgressInput) {
    return this.userProgressService.update(updateUserProgressInput.id, updateUserProgressInput);
  }

  @Mutation(() => UserProgressEntity)
  removeUserProgress(@Args('id', { type: () => Int }) id: number) {
    return this.userProgressService.remove(id);
  }
}
