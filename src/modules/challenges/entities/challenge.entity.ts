import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { LessonEntity } from "../../lessons/entities/lesson.entity";
import { OptionEntity } from "../../../entities/options.entity";
import { LocalizedStringGraphQL } from "src/models";
import { AbstractEntity } from "common/common";
import { IsOptional } from "class-validator";

@Entity()
@ObjectType()
export class ChallengeEntity extends AbstractEntity<ChallengeEntity> {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column("jsonb", { nullable: true })
  @Field(() => LocalizedStringGraphQL)
  name: LocalizedStringGraphQL;

  @Column("jsonb", { nullable: true })
  @Field(() => LocalizedStringGraphQL)
  description: LocalizedStringGraphQL;

  @Column({ type: "enum", enum: ["task", "exam", "quiz", "insert-suggestion"] })
  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  @IsOptional()
  type: string;

  @Column("text")
  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  @IsOptional()
  content: string; // or multimedia content

  @Column({ nullable: true })
  @IsOptional()
  @Field(() => Number, { nullable: true })
  passingScore?: number;

  @Column("text",{ nullable: true})
  @Field(() => LocalizedStringGraphQL, { nullable: true })
  @IsOptional()
  question: LocalizedStringGraphQL;

  @ManyToOne(() => LessonEntity, (lesson) => lesson.challenges)
  @Field(() => LessonEntity)
  lesson: LessonEntity;

  @OneToMany(() => OptionEntity, (option) => option.challenge)
  @Field(() => [OptionEntity], { nullable: true })
  options: OptionEntity[];

  @Column({nullable: true})
  @Field({nullable: true})
  lessonId: number;
 
}
