import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ChallengeEntity } from "../../../entities/challenge.entity";
import { LocalizedString } from "src/models/course-models";
import { UserProgressEntity } from "../../../entities/UserProgress.entity";
import { UnitEntity } from "src/modules/units/entities/unit.entity";

@Entity()
@ObjectType()
export class LessonEntity {
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

  @OneToMany(() => UserProgressEntity, (progress) => progress.lesson)
  @Field(() => [UserProgressEntity], { nullable: true })
  userProgress: UserProgressEntity[];
}