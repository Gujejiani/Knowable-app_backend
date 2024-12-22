import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ChallengeEntity } from "../modules/challenges/entities/challenge.entity";


@Entity()
@ObjectType()
export class OptionEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column("text")
  @Field(() => String)
  optionText: string;

  @Column("boolean")
  @Field(() => Boolean)
  isCorrect: boolean;

  @ManyToOne(() => ChallengeEntity, (challenge) => challenge.options)
  @Field(() => ChallengeEntity)
  challenge: ChallengeEntity;
}