import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsString()
  @MinLength(3)
  username: string;

  @Field(() => String)
  @IsEmail()
  email: string;
}
