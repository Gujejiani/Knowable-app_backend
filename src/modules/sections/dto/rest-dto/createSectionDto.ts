import { IsNotEmpty, IsNumber, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { LocalizedString } from 'src/models';

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
}

export class UnitInputRestDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsArray()
  lessons?: string[];
}
