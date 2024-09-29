import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Lesson } from "./lesson.entity";
import { Option } from "./options.entity";



@Entity()
export class Challenge {
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



  @ManyToOne(() => Lesson, (lesson) => lesson.challenges)
  lesson: Lesson;

  @OneToMany(() => Option, (option) => option.challenge, { cascade: true })
  options: Option[];
}
