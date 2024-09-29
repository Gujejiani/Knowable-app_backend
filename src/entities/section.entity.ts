import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { CourseEntity } from "../courses/entities/course.entity";
import { UnitEntity } from "./unit.entity";
import { LocalizedString } from "src/models/course-models";
import { UserProgressEntity } from "./UserProgress.entity";


@Entity()
export class SectionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("jsonb")
  name: LocalizedString;

  @ManyToOne(() => CourseEntity, (course) => course.sections)
  course: CourseEntity;

  @OneToMany(() => UnitEntity, (unit) => unit.section, { cascade: true })
  units: UnitEntity[];


  @OneToMany(() => UserProgressEntity, (progress) => progress.section)
  userProgress: UserProgressEntity[];
}
