import { InputType, Field, PartialType } from '@nestjs/graphql';
import {IsNotEmpty } from 'class-validator';
import { CreateUnitInput } from './create-unit.input';


@InputType()
export class UpdateUnitInput  extends PartialType(CreateUnitInput)  {
  @Field({ nullable: true })
  @IsNotEmpty()
  id: number;

 
}