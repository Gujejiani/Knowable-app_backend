import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import {  LocalizedStringInput } from 'src/models/course-models';

@InputType()
export class CreateCourseInput {
  @Field(() => LocalizedStringInput)
  @ValidateNested()
  @Type(() => LocalizedStringInput) 
  @IsNotEmpty()
  name: LocalizedStringInput;

  @Field(() => LocalizedStringInput)
  @ValidateNested()
  @Type(() => LocalizedStringInput) 
  @IsNotEmpty()
  description: LocalizedStringInput;

  @Field(() => String, { nullable: true })
  imageUrl?: string;

  @Field(() => String, { nullable: true })
  icon?: string;
}

