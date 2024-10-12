import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { LessonEntity } from "./lesson.entity";
import { OptionEntity } from "./options.entity";

@Entity()
@ObjectType()
export class ChallengeEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column("text")
  @Field(() => String)
  name: string;

  @Column("text")
  @Field(() => String)
  description: string;

  @Column({ type: "enum", enum: ["task", "exam", "quiz", "insert-suggestion"] })
  @Field(() => String)
  type: string;

  @Column("text")
  @Field(() => String)
  content: string; // or multimedia content

  @Column({ nullable: true })
  @Field(() => Number, { nullable: true })
  passingScore?: number;

  @Column("text")
  @Field(() => String)
  question: string;

  @ManyToOne(() => LessonEntity, (lesson) => lesson.challenges)
  @Field(() => LessonEntity)
  lesson: LessonEntity;

  @OneToMany(() => OptionEntity, (option) => option.challenge, { cascade: true })
  @Field(() => [OptionEntity], { nullable: true })
  options: OptionEntity[];
}
