import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ChallengeEntity } from "../../challenges/entities/challenge.entity";
import { AbstractEntity } from "common/common";


@Entity()
@ObjectType()
export class OptionEntity extends AbstractEntity<OptionEntity> {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column("text")
  @Field(() => String)
  optionText: string;

  @Column("boolean")
  @Field(() => Boolean)
  isCorrect: boolean;

  @Column("int")
  @Field(() => Number)
  order: number;

  @ManyToOne(() => ChallengeEntity, (challenge) => challenge.options)
  @Field(() => ChallengeEntity)
  challenge: ChallengeEntity;

  @Column({nullable: true})
  @Field()
  challengeId: number;

}