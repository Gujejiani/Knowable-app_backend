
import { IsJSON, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { LocalizedString } from 'src/models';


export class CreateCourseDto {


    @IsNotEmpty()
    id: number;
  
    @IsJSON()
    @IsNotEmpty()
    name: LocalizedString;
  
    @IsJSON()
    @IsOptional()
    description?: LocalizedString;
  
    @IsOptional()
    @IsString()
    imageUrl?: string;
  
    @IsOptional()
    @IsString()
    icon?: string;
  
    @IsOptional()
    createdAt?: Date;
  
    @IsOptional()
    updatedAt?: Date;

}
