import {  LocalizedString } from "src/models/course-models";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { UnitEntity } from "./unit.entity";
import { ChallengeEntity } from "./challenge.entity";
import { UserProgressEntity } from "./UserProgress.entity";


@Entity()
export class LessonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("jsonb")
  name: LocalizedString;

  @Column("jsonb")
  description: LocalizedString;

  @Column({ nullable: true })
  imageUrl?: string;

  @Column({ nullable: true })
  icon?: string;

  @Column("text")
  content: string; // or JSON if multimedia content

  

  @ManyToOne(() => UnitEntity, (unit) => unit.lessons)
  unit: UnitEntity;

  @OneToMany(() => ChallengeEntity, (challenge) => challenge.lesson, { cascade: true })
  challenges: ChallengeEntity[];

  @OneToMany(() => UserProgressEntity, (progress) => progress.lesson)
  userProgress: UserProgressEntity[];
}
