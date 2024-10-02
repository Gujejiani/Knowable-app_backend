
export enum IStatusEnum {
  locked = 'locked',
  unlocked = 'unlocked',
  completed = 'completed',
}

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

export interface LocalizedString {
  en: string;
  es?: string;
}

