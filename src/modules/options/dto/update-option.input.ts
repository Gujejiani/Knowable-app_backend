import { IsNotEmpty } from 'class-validator';
import { CreateOptionInput } from './create-option.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOptionInput extends PartialType(CreateOptionInput) {
  @Field()
  @IsNotEmpty()
  id: number;
}
