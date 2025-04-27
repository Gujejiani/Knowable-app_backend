import { InputType, Field } from '@nestjs/graphql';
import { ValidateNested, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { CourseHeaderBackgroundEnum, LocalizedStringInput } from 'src/models';

@InputType()
export class CreateSectionInput {
  @Field(() => LocalizedStringInput)
  @ValidateNested()
  @Type(() => LocalizedStringInput)
  @IsNotEmpty()
  name: LocalizedStringInput;

  @Field()
  @IsNotEmpty() 
  courseId: number;

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



@InputType()
export class UnitInput {
  @Field()
  @IsNotEmpty() // Ensure title is not empty
  title: string;

  @Field(() => [String], { nullable: true })
  @IsOptional() // lessons are optional
  lessons?: string[];
}
