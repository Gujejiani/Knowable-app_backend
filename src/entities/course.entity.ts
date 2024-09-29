import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Section } from './section.entity';
import { LocalizedString } from 'src/models/course-models';

@Entity()
export class Course {
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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Section, (section) => section.course, { cascade: true })
  sections: Section[];
}
