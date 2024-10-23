import { CourseBackground, CourseHeaderBackgroundEnum, LocalizedStringGraphQL } from "src/models/course-models";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from '@nestjs/graphql';

import { AbstractEntity } from "common/common";
import { SectionEntity } from "src/modules/sections/entities/section.entity";
import { LessonEntity } from "src/entities/lesson.entity";
import { UserProgressEntity } from "src/entities/UserProgress.entity";

@Entity()
@ObjectType()
export class UnitEntity extends AbstractEntity<UnitEntity> {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column("jsonb")
  @Field(() => LocalizedStringGraphQL)
  name: LocalizedStringGraphQL;

  @Column("jsonb")
  @Field(() => LocalizedStringGraphQL)
  description: LocalizedStringGraphQL;

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


  @Column({nullable: true})
  @Field()
  sectionId: number;
}