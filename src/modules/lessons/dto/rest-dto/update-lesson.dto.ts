import { IsString, IsOptional, IsObject, IsNumber } from 'class-validator';
import { LocalizedString } from 'src/models';

export class UpdateLessonDto {
  @IsObject()
  @IsOptional()
  name?: LocalizedString; // Optional for partial update

  @IsObject()
  @IsOptional()
  description?: LocalizedString; // Optional for partial update

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  icon?: string;

  @IsString()
  @IsOptional()
  content?: string; // Optional for partial update

  @IsOptional()
  @IsNumber()
  unitId?: number; // Optional for partial update
}
