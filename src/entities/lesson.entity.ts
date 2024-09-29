import { LessonStatus, LocalizedString, LessonStatusEnum } from "src/models/course-models";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Unit } from "./unit.entity";
import { Challenge } from "./challenge.entity";


@Entity()
export class Lesson {
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

  @Column({ type: "enum", enum: LessonStatusEnum })
  status: LessonStatus;

  @ManyToOne(() => Unit, (unit) => unit.lessons)
  unit: Unit;

  @OneToMany(() => Challenge, (challenge) => challenge.lesson, { cascade: true })
  challenges: Challenge[];
}
