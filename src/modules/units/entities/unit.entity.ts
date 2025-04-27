import { CourseBackground, CourseHeaderBackgroundEnum, IStatus, IStatusEnum, LocalizedStringGraphQL } from "src/models/course-models";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from '@nestjs/graphql';

import { AbstractEntity } from "common/common";
import { SectionEntity } from "src/modules/sections/entities/section.entity";
import { LessonEntity } from "src/modules/lessons/entities/lesson.entity";

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

  // todo make not nullable
  @Column({ type: "enum", enum: IStatusEnum, nullable: true, default: null }) 
  @Field(() => IStatusEnum, { nullable: true})
  status: IStatus  | null;

  @ManyToOne(() => SectionEntity, (section) => section.units)
  @Field(() => SectionEntity)
  section: SectionEntity;

  @OneToMany(() => LessonEntity, (lesson) => lesson.unit)
  @Field(() => [LessonEntity], { nullable: true })
  lessons: LessonEntity[];




  @Column({nullable: true})
  @Field()
  sectionId: number;
}