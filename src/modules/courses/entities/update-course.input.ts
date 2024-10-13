import { InputType, Field } from '@nestjs/graphql';
import {  LocalizedStringInput } from 'src/models/course-models';



@InputType()
export class UpdateCourseInput {
  @Field({ nullable: true })
  id?: number;

  @Field(() => LocalizedStringInput, { nullable: true })
  name?: LocalizedStringInput;

  @Field(() => LocalizedStringInput, { nullable: true })
  description?: LocalizedStringInput;

  @Field(() => String, { nullable: true })
  imageUrl?: string;

  @Field(() => String, { nullable: true })
  icon?: string;
}