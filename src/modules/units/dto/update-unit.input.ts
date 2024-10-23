import { InputType, Field } from '@nestjs/graphql';
import { LocalizedStringInput } from 'src/models/course-models';
import { CourseHeaderBackgroundEnum } from 'src/models/course-models';
import { ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';


@InputType()
export class UpdateUnitInput {
  @Field({ nullable: true })
  @IsOptional()
  id?: number;

  @Field(() => LocalizedStringInput, { nullable: true })
  @ValidateNested()
  @Type(() => LocalizedStringInput)
  @IsOptional()
  name?: LocalizedStringInput;

  @Field(() => LocalizedStringInput, { nullable: true })
  @ValidateNested()
  @Type(() => LocalizedStringInput)
  @IsOptional()
  description?: LocalizedStringInput;

  @Field(() => String, { nullable: true })
  @IsOptional()
  imageUrl?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  icon?: string;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  count?: number;

  @Field(() => CourseHeaderBackgroundEnum, { nullable: true })
  @IsOptional()
  unitColor?: CourseHeaderBackgroundEnum;

  @Field({ nullable: true })
  @IsOptional()
  sectionId?: number;
}