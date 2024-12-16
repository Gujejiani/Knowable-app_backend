import { IsNotEmpty } from 'class-validator';
import { CreateChallengeInput } from './create-challenge.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateChallengeInput extends PartialType(CreateChallengeInput) {
  @Field()
  @IsNotEmpty()
  id: number;
}
