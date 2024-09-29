import { CourseBackground, CourseHeaderBackgroundEnum, LocalizedString } from "src/models/course-models";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Section } from "./section.entity";
import { Lesson } from "./lesson.entity";
import { UserProgress } from "./UserProgress.entity";


@Entity()
export class Unit {
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

  @Column("int")
  count: number;

  @Column({ type: "enum", enum: CourseHeaderBackgroundEnum })
  unitColor: CourseBackground;

  @ManyToOne(() => Section, (section) => section.units)
  section: Section;

  @OneToMany(() => Lesson, (lesson) => lesson.unit, { cascade: true })
  lessons: Lesson[];

  @OneToMany(() => UserProgress, (progress) => progress.unit)
  userProgress: UserProgress[];
}
