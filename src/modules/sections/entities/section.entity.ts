import { Entity, Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CourseEntity } from "../../courses/entities/course.entity";
import {  CourseBackground, CourseHeaderBackgroundEnum, LocalizedStringGraphQL } from "src/models/course-models";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { AbstractEntity } from "common/common";
import { UnitEntity } from "src/modules/units/entities/unit.entity";


@Entity()
@ObjectType() // Add this decorator to make it a GraphQL output type
export class SectionEntity extends AbstractEntity<SectionEntity> {

  @PrimaryGeneratedColumn()
  @Field(() => ID) // Ensure this decorator is present
  id: number;

  @Column("jsonb")
  @Field(() => LocalizedStringGraphQL) // Adjust type if necessary
  name: LocalizedStringGraphQL;

  // todo dublication needs removal
  @Column({nullable: true})
  @Field()
  courseId: number; 

  @Column("jsonb")
  @Field(() => LocalizedStringGraphQL)
  description: LocalizedStringGraphQL;

  @ManyToOne(() => CourseEntity, (course) => course.sections)
  @Field(() => CourseEntity)
  course: CourseEntity;

  @Column({ type: "enum", enum: CourseHeaderBackgroundEnum, nullable: true, default: null }) 
  @Field(() => CourseHeaderBackgroundEnum, { nullable: true})
  sectionColor: CourseBackground  | null;

  @OneToMany(() => UnitEntity, (unit) => unit.section)
  @Field(() => [UnitEntity], { nullable: true })
  units: UnitEntity[];



  // userProgress: UserProgressEntity[];
}
