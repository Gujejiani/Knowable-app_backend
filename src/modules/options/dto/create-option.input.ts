import { Field, InputType, Int } from "@nestjs/graphql";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

@InputType()
export class CreateOptionInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  optionText: string;

  @Field(() => Boolean)
  @IsNotEmpty()
  @IsBoolean()
  isCorrect: boolean;

  @Field(() => Int)
  @IsOptional()
  @IsInt()
  @Min(1)
  order: number;

  @Field(() => Int)
  @IsOptional()
  @IsInt()
  challengeId: number;
}
