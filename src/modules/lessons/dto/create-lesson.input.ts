import { InputType, Field } from '@nestjs/graphql';
import { IsObject, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { LocalizedStringInput } from 'src/models/course-models';

@InputType()
export class CreateLessonInput {
  @Field(() => LocalizedStringInput)
  @IsObject()
  @IsNotEmpty()
  name: LocalizedStringInput;

  @Field(() => LocalizedStringInput, { nullable: true })
  @IsObject()
  @IsOptional()
  description?: LocalizedStringInput;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  icon?: string;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  updatedAt?: Date;
}
