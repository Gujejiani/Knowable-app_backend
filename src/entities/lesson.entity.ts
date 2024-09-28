import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Module } from './module.entity';
import { Challenge } from './challenge.entity';
import { LessonStatus, LessonStatusEnum } from 'src/models/course-models';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('jsonb')
  name: Record<string, string>;

  @Column('jsonb')
  description: Record<string, string>;

  @Column({ nullable: true })
  imageUrl?: string;

  @Column({ nullable: true })
  icon?: string;

  @Column('text')
  content: string; // Could be expanded for multimedia

  @Column({
    type: 'enum',
    enum: LessonStatusEnum,
  })
  status: LessonStatus;

  @ManyToOne(() => Module, (module) => module.lessons)
  module: Module;

  @OneToMany(() => Challenge, (challenge) => challenge.lesson, {
    cascade: true,
  })
  challenges: Challenge[];
}
