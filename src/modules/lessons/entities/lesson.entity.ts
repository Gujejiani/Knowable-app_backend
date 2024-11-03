import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ChallengeEntity } from "../../../entities/challenge.entity";
import { LocalizedString } from "src/models/course-models";
import { UnitEntity } from "src/modules/units/entities/unit.entity";
import { AbstractEntity } from "common/common";

@Entity()
@ObjectType()
export class LessonEntity extends AbstractEntity<LessonEntity>  {
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

  @Column("text")
  @Field(() => String)
  content: string; // or JSON if multimedia content

  @ManyToOne(() => UnitEntity, (unit) => unit.lessons)
  @Field(() => UnitEntity)
  unit: UnitEntity;

  @OneToMany(() => ChallengeEntity, (challenge) => challenge.lesson, { cascade: true })
  @Field(() => [ChallengeEntity], { nullable: true })
  challenges: ChallengeEntity[];

}