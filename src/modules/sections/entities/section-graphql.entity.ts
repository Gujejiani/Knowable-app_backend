import { ObjectType, Field, ID } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-type-json';
import { CourseEntity } from 'src/modules/courses/entities/course.entity';
import { UnitEntity } from 'src/entities/unit.entity';
import { UserProgressEntity } from 'src/entities/UserProgress.entity';

@ObjectType()
export class SectionEntityBLABLA {
  @Field(() => ID)
  id: number;

  @Field(() => GraphQLJSONObject)
  name: Record<string, string>; // Matches the LocalizedString type

  @Field(() => CourseEntity)
  course: CourseEntity;

  @Field(() => [UnitEntity], { nullable: true })
  units: UnitEntity[];

  @Field(() => [UserProgressEntity], { nullable: true })
  userProgress: UserProgressEntity[];
}