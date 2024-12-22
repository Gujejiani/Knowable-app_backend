import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ChallengeEntity } from "../../challenges/entities/challenge.entity";
import { LocalizedStringGraphQL } from "src/models/course-models";
import { UnitEntity } from "src/modules/units/entities/unit.entity";
import { AbstractEntity } from "common/common";

@Entity()
@ObjectType()
export class LessonEntity extends AbstractEntity<LessonEntity>  {
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

  @Column("text", {nullable: true})
  @Field(() => String)
  content: string; // or JSON if multimedia content

  @ManyToOne(() => UnitEntity, (unit) => unit.lessons)
  @Field(() => UnitEntity)
  unit: UnitEntity;

  @OneToMany(() => ChallengeEntity, (challenge) => challenge.lesson)
  @Field(() => [ChallengeEntity], { nullable: true })
  challenges: ChallengeEntity[];


  @Column({nullable: true})
  @Field()
  unitId: number;

}