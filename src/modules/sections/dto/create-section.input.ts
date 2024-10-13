import { InputType, Field } from '@nestjs/graphql';
import { ValidateNested, IsNotEmpty, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { LocalizedStringInput } from 'src/models';

@InputType()
export class CreateSectionInput {
  @Field(() => LocalizedStringInput)
  @ValidateNested() // Validate nested objects
  @Type(() => LocalizedStringInput) // Transform plain object to LocalizedStringInput
  @IsNotEmpty() // Validate that name is not empty
  name: LocalizedStringInput;

  @Field()
  @IsNotEmpty() // Validate that courseId is provided
  courseId: number;

  @Field(() => [UnitInput], { nullable: true })
  @ValidateNested({ each: true }) // Validate each unit in the array
  @Type(() => UnitInput) // Transform plain objects into UnitInput instances
  @IsOptional() // units are optional
  units?: UnitInput[];
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
