import { CourseBackground, CourseHeaderBackgroundEnum, LocalizedString } from "src/models/course-models";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { LessonEntity } from "./lesson.entity";
import { UserProgressEntity } from "./UserProgress.entity";
import { SectionEntity } from "../modules/sections/entities/section.entity";

@Entity()
@ObjectType()
export class UnitEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column("jsonb")
  @Field(() => String)
  name: LocalizedString;

  @Column("jsonb")
  @Field(() => String)
  description: LocalizedString;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  imageUrl?: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  icon?: string;

  @Column("int")
  @Field(() => Number)
  count: number;

  @Column({ type: "enum", enum: CourseHeaderBackgroundEnum })
  @Field(() => CourseHeaderBackgroundEnum)
  unitColor: CourseBackground;

  @ManyToOne(() => SectionEntity, (section) => section.units)
  @Field(() => SectionEntity)
  section: SectionEntity;

  @OneToMany(() => LessonEntity, (lesson) => lesson.unit, { cascade: true })
  @Field(() => [LessonEntity], { nullable: true })
  lessons: LessonEntity[];

  @OneToMany(() => UserProgressEntity, (progress) => progress.unit)
  @Field(() => [UserProgressEntity], { nullable: true })
  userProgress: UserProgressEntity[];
}