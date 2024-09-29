import {
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Section } from '../../entities/section.entity';
import { LocalizedString } from 'src/models/course-models';
import { UserProgress } from '../../entities/UserProgress.entity';
import { AbstractEntity } from 'common/common';

@Entity()
export class CourseEntity extends AbstractEntity<CourseEntity> {


  @Column("jsonb")
  name: LocalizedString;

  @Column("jsonb")
  description: LocalizedString;

  @Column({ nullable: true })
  imageUrl?: string;

  @Column({ nullable: true })
  icon?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Section, (section) => section.course, { cascade: true })
  sections: Section[];

  @OneToMany(() => UserProgress, (progress) => progress.course)
  userProgress: UserProgress[];
}
