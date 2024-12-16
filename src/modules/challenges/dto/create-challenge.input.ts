import {  Field, InputType } from '@nestjs/graphql';
import { LocalizedStringInput } from "src/models";
import { IsNotEmpty, IsObject, IsOptional } from "class-validator";

@InputType()
export class CreateChallengeInput {


  @Field(() => LocalizedStringInput)
  @IsObject()
  @IsNotEmpty()
  name: LocalizedStringInput;

  @Field(() => LocalizedStringInput)
  @IsObject()
  @IsOptional()
  description: LocalizedStringInput;

  @Field(() => String, {nullable: true})
  @IsOptional()
  type: string;

  @Field(() => String,  {nullable: true})
  @IsOptional()
  content: string; // or multimedia content

  @IsOptional()
  @Field(() => Number, { nullable: true })
  passingScore?: number;

  @Field(() => LocalizedStringInput,  {nullable: true})
  @IsOptional()
  question: LocalizedStringInput;

  @Field({nullable: true})
  lessonId: number;




}
