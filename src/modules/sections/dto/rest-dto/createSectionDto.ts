import { IsNotEmpty, IsNumber, IsOptional, IsArray, ValidateNested, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { CourseHeaderBackgroundEnum, LocalizedString } from 'src/models';

export class CreateSectionRestDto {
  @IsNotEmpty()
  @Type(() => Object)
  name: LocalizedString;

  @IsNumber()
  courseId: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UnitInputRestDto)
  units?: UnitInputRestDto[];

  @IsOptional() 
  @IsEnum(CourseHeaderBackgroundEnum)
  sectionColor?: CourseHeaderBackgroundEnum | null; 
}

export class UnitInputRestDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsArray()
  lessons?: string[];
}
