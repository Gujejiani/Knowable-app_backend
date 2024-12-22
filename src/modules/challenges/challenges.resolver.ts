import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ChallengesService } from './challenges.service';
import { CreateChallengeInput } from './dto/create-challenge.input';
import { UpdateChallengeInput } from './dto/update-challenge.input';
import { ChallengeEntity } from './entities/challenge.entity';

@Resolver(() => ChallengeEntity)
export class ChallengesResolver {
  constructor(private readonly challengesService: ChallengesService) {}

  @Mutation(() => ChallengeEntity)
  createChallenge(@Args('createChallengeInput') createChallengeInput: CreateChallengeInput) {
    return this.challengesService.create(createChallengeInput);
  }

  @Query(() => [ChallengeEntity], { name: 'challenges' })
  findAll() {
    return this.challengesService.findAll();
  }

  @Query(() => ChallengeEntity, { name: 'challenge' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.challengesService.findOne(id);
  }

  @Mutation(() => ChallengeEntity)
  updateChallenge(@Args('updateChallengeInput') updateChallengeInput: UpdateChallengeInput) {
    return this.challengesService.update(updateChallengeInput.id, updateChallengeInput);
  }

  @Mutation(() => ChallengeEntity, {name: 'removeChallenge'})
  removeChallenge(@Args('id', { type: () => Int }) id: number) {
    return this.challengesService.remove(id);
  }
}
