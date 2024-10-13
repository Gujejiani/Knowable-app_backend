import { InputType, registerEnumType } from "@nestjs/graphql";

export enum IStatusEnum {
  locked = 'locked',
  unlocked = 'unlocked',
  completed = 'completed',
}


registerEnumType(IStatusEnum, {
  name: 'IStatusEnum', // Name to be used in the GraphQL schema
  description: 'Enum that represents the status of a user progress',
})



export type CourseBackground = CourseHeaderBackgroundEnum;

export enum CourseHeaderBackgroundEnum {
  Pink = '#D81B60',
  LightBlue = '#1E3A8A',
  LightGreen = '#2F855A',
  LightCoral = '#C53030',
  Purple = '#6B46C1',
  Orange = '#D97706',
  Teal = '#2C7A7B',
}
registerEnumType(CourseHeaderBackgroundEnum, {
  name: 'CourseHeaderBackgroundEnum', // Name to be used in the GraphQL schema
  description: 'Enum that represents the background color options for units',
});
export interface LocalizedString {
  en: string;
  es?: string;
}



import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from "class-validator";

@ObjectType()  // Mark this class as a GraphQL Object Type

export class LocalizedStringGraphQL {
  @Field()  // GraphQL field for English version
  en: string;

  @Field({ nullable: true })  // Optional GraphQL field for Spanish version
  es?: string;
}

@InputType()
export class LocalizedStringInput {
  @Field()
  @IsNotEmpty() // Ensure 'en' field is present
  en: string;

  @Field({ nullable: true })
  @IsOptional() // 'es' is optional
  es?: string;
}