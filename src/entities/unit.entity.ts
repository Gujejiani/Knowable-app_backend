import { CourseBackground, CourseHeaderBackgroundEnum, LocalizedString } from "src/models/course-models";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { SectionEntity } from "./section.entity";
import { LessonEntity } from "./lesson.entity";
import { UserProgressEntity } from "./UserProgress.entity";


@Entity()
export class UnitEntity {
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

  @ManyToOne(() => SectionEntity, (section) => section.units)
  section: SectionEntity;

  @OneToMany(() => LessonEntity, (lesson) => lesson.unit, { cascade: true })
  lessons: LessonEntity[];

  @OneToMany(() => UserProgressEntity, (progress) => progress.unit)
  userProgress: UserProgressEntity[];
}
