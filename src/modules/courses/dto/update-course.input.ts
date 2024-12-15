import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateCourseInput } from './create-course.input';
import { IsNotEmpty } from 'class-validator';



@InputType()
export class UpdateCourseInput extends PartialType(CreateCourseInput) {
  @Field()
  @IsNotEmpty()
  id?: number;

}