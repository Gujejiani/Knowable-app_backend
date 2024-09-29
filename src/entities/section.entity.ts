import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Course } from "./course.entity";
import { Unit } from "./unit.entity";
import { LocalizedString } from "src/models/course-models";


@Entity()
export class Section {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("jsonb")
  name: LocalizedString;

  @ManyToOne(() => Course, (course) => course.sections)
  course: Course;

  @OneToMany(() => Unit, (unit) => unit.section, { cascade: true })
  units: Unit[];
}
