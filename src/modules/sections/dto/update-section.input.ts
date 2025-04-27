import { InputType, Field } from '@nestjs/graphql';
import { UnitInput } from './create-section.input';
import { CourseHeaderBackgroundEnum, LocalizedStringInput } from 'src/models';
import { ValidateNested, IsOptional, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class UpdateSectionInput {
  @Field({ nullable: true })
  @IsOptional()
  id?: number;

  @Field(() => LocalizedStringInput, { nullable: true })
  @ValidateNested()
  @Type(() => LocalizedStringInput)
  @IsOptional()
  name?: LocalizedStringInput;

  @Field({ nullable: true })
  @IsOptional()
  courseId?: number;

  @Field(() => [UnitInput], { nullable: true })
  @ValidateNested({ each: true })
  @Type(() => UnitInput)
  @IsOptional()
  units?: UnitInput[];

  @Field(() => CourseHeaderBackgroundEnum, { nullable: true })
  @IsOptional()
  @IsEnum(CourseHeaderBackgroundEnum)
  sectionColor?: CourseHeaderBackgroundEnum | null;
}
