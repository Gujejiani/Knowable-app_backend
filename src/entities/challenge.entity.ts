import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { LessonEntity } from "./lesson.entity";
import { OptionEntity } from "./options.entity";



@Entity()
export class ChallengeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  name: string;

  @Column("text")
  description: string;

  @Column({ type: "enum", enum: ["task", "exam", "quiz", "insert-suggestion"] })
  type: string;

  @Column("text")
  content: string; // or multimedia content

  @Column({ nullable: true })
  passingScore?: number;

  @Column("text")
  question: string;



  @ManyToOne(() => LessonEntity, (lesson) => lesson.challenges)
  lesson: LessonEntity;

  @OneToMany(() => OptionEntity, (option) => option.challenge, { cascade: true })
  options: OptionEntity[];
}
