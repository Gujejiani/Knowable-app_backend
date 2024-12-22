import { IsOptional, IsObject, IsNumber } from 'class-validator';
import { UnitInputRestDto } from './createSectionDto';
import { LocalizedString } from 'src/models';


export class UpdateSectionDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsObject()
  name?: LocalizedString;

  @IsOptional()
  @IsNumber()
  courseId?: number;

  @IsOptional()
  units?: UnitInputRestDto[];
}
