import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { CourseEntity } from "../courses/entities/course.entity";
import { Unit } from "./unit.entity";
import { LocalizedString } from "src/models/course-models";
import { UserProgress } from "./UserProgress.entity";


@Entity()
export class Section {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("jsonb")
  name: LocalizedString;

  @ManyToOne(() => CourseEntity, (course) => course.sections)
  course: CourseEntity;

  @OneToMany(() => Unit, (unit) => unit.section, { cascade: true })
  units: Unit[];


  @OneToMany(() => UserProgress, (progress) => progress.section)
  userProgress: UserProgress[];
}
