import {
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SectionEntity } from '../../entities/section.entity';
import { LocalizedString } from 'src/models/course-models';
import {  UserProgressEntity } from '../../entities/UserProgress.entity';
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

  @OneToMany(() => SectionEntity, (section) => section.course, { cascade: true })
  sections: SectionEntity[];

  @OneToMany(() => UserProgressEntity, (progress) => progress.course)
  userProgress: UserProgressEntity[];
}
