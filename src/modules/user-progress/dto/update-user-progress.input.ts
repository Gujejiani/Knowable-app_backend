import { IsNotEmpty } from 'class-validator';
import { CreateUserProgressInput } from './create-user-progress.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserProgressInput extends PartialType(CreateUserProgressInput) {
  @Field()
  @IsNotEmpty()
  id: number;
}
