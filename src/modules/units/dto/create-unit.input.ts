import { InputType, Field } from '@nestjs/graphql';
import { IStatus, IStatusEnum, LocalizedStringInput } from 'src/models/course-models';
import { CourseHeaderBackgroundEnum } from 'src/models/course-models';
import { ValidateNested, IsOptional, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class CreateUnitInput {
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
  @IsOptional()
  imageUrl?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  icon?: string;

  @Field(() => Number)
  @IsNotEmpty()
  count: number;

  @Field(() => CourseHeaderBackgroundEnum)
  @IsNotEmpty()
  unitColor: CourseHeaderBackgroundEnum;

  @Field()
  @IsNotEmpty()
  sectionId: number;

  @Field(() => IStatusEnum, { nullable: true })  
  @IsOptional()  
  status: IStatus | null;  

  
}

