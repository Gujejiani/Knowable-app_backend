import { GraphQLJSONObject } from 'graphql-type-json';
import { InputType, Field,  } from '@nestjs/graphql';
import { UnitInput } from './create-section.input';

@InputType()
export class UpdateSectionInput {
  @Field({ nullable: true })
  id?: number;

  @Field(() => GraphQLJSONObject, { nullable: true })
  name?: Record<string, string>;

  @Field({ nullable: true })
  courseId?: number;

  @Field(() => [UnitInput], { nullable: true })
  units?: UnitInput[];
}