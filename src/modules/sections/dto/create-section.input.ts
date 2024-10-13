import { InputType,  Field } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-type-json'; // Import GraphQL JSON type

@InputType()
export class CreateSectionInput {
  @Field(() => GraphQLJSONObject)
  name: Record<string, string>; // Matches the LocalizedString type

  @Field()
  courseId: number;

  @Field(() => [UnitInput], { nullable: true })
  units?: UnitInput[];
}









@InputType()
export class UnitInput {
  @Field()
  title: string;

  @Field(() => [String], { nullable: true })
  lessons?: string[];
}