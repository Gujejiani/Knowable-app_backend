import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Course } from './course.entity';
import { Unit } from './unit.entity';

@Entity()
export class Section {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('jsonb')
  name: Record<string, string>;

  @ManyToOne(() => Course, (course) => course.sections)
  course: Course;

  @OneToMany(() => Unit, (unit) => unit.section, { cascade: true })
  units: Unit[];
}
