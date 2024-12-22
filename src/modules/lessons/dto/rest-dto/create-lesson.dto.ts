import { IsString, IsOptional, IsObject, IsNumber } from 'class-validator';
import { LocalizedString } from 'src/models';

export class CreateLessonDto {
  @IsObject()
  @IsOptional()
  name: LocalizedString; // Use a string for `LocalizedString` if it will be serialized or handled as a string

  @IsObject()
  @IsOptional()
  description: LocalizedString; // Same as above, use string if LocalizedString will be handled this way

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  icon?: string;

  @IsString()
  @IsOptional()
  content: string; // Multimedia content as string or another serialized format

  @IsNumber()
  unitId: number; // Assuming the unit will be identified by a string ID
}
