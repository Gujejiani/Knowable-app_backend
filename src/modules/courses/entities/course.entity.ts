import {
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { LocalizedString } from 'src/models/course-models';
import { UserProgressEntity } from '../../../entities/UserProgress.entity';
import { AbstractEntity } from 'common/common';
import { SectionEntity } from 'src/modules/sections/entities/section.entity';

@Entity()
@ObjectType()
export class CourseEntity extends AbstractEntity<CourseEntity> {
  @Field(() => ID)
  id: number;

  @Column("jsonb")
  @Field(() => String)
  name: LocalizedString;

  @Column("jsonb")
  @Field(() => String)
  description: LocalizedString;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  imageUrl?: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  icon?: string;

  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn()
  @Field(() => Date)
  updatedAt: Date;

  @OneToMany(() => SectionEntity, (section) => section.course, { cascade: true })
  @Field(() => [SectionEntity], { nullable: true })
  sections: SectionEntity[];

  @OneToMany(() => UserProgressEntity, (progress) => progress.course)
  @Field(() => [UserProgressEntity], { nullable: true })
  userProgress: UserProgressEntity[];
}