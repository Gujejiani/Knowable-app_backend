
import { IsObject, IsNotEmpty, IsOptional, IsString, } from 'class-validator';
import { LocalizedString } from 'src/models';


export class CreateCourseDto {


  
  
    @IsObject()
    @IsNotEmpty()
    name: LocalizedString;
  
    @IsObject()
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

