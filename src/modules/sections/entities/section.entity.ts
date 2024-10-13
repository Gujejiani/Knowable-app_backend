import { Entity, Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CourseEntity } from "../../courses/entities/course.entity";
import { UnitEntity } from "../../../entities/unit.entity";
import { LocalizedString } from "src/models/course-models";
import { UserProgressEntity } from "../../../entities/UserProgress.entity";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { AbstractEntity } from "common/common";
import { GraphQLJSONObject } from "graphql-type-json";


@Entity()
@ObjectType() // Add this decorator to make it a GraphQL output type

export class SectionEntity extends AbstractEntity<SectionEntity> {

  @PrimaryGeneratedColumn()
  @Field(() => ID) // Ensure this decorator is present
  id: number;

  @Column("jsonb")
  @Field(() => GraphQLJSONObject) // Adjust type if necessary
  name: LocalizedString;

  @ManyToOne(() => CourseEntity, (course) => course.sections)
  @Field(() => CourseEntity)
  course: CourseEntity;

  @OneToMany(() => UnitEntity, (unit) => unit.section, { cascade: true })
  @Field(() => [UnitEntity], { nullable: true })
  units: UnitEntity[];


  @OneToMany(() => UserProgressEntity, (progress) => progress.section)
  @Field(() => [UserProgressEntity], { nullable: true })

  userProgress: UserProgressEntity[];
}
