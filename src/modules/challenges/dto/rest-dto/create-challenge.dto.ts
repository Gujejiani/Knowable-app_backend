import { IsNotEmpty, IsObject, IsOptional } from "class-validator";
import { LocalizedString } from "src/models";

export class CreateChallengeDto {

  @IsObject()
  @IsNotEmpty()
  name: LocalizedString;

  @IsObject()
  @IsOptional()
  description: LocalizedString;

  @IsOptional()
  type: string;

  @IsOptional()
  content: string; // or multimedia content

  @IsOptional()
  passingScore?: number;

  @IsOptional()
  question: LocalizedString;

  @IsNotEmpty() // Assuming lessonId is required in the DTO
  lessonId: number;

}
