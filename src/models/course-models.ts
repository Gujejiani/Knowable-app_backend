import { registerEnumType } from "@nestjs/graphql";

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

