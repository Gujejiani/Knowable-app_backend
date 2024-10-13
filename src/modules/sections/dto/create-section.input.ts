import { InputType,  Field } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-type-json'; // Import GraphQL JSON type
import { LocalizedString } from 'src/models';

@InputType()
export class CreateSectionInput {
  @Field(() => GraphQLJSONObject)
  name: LocalizedString; // Matches the LocalizedString type (assuming it is represented as a JSON object)

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