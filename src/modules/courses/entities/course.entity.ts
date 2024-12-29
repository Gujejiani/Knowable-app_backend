import {
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import {  LocalizedStringGraphQL } from 'src/models/course-models';
import { AbstractEntity } from 'common/common';
import { SectionEntity } from 'src/modules/sections/entities/section.entity';
import { UserProgressEntity } from 'src/modules/user-progress/entities/user-progress.entity';

@Entity()
@ObjectType()
export class CourseEntity extends AbstractEntity<CourseEntity> {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column("jsonb")
  @Field(() => LocalizedStringGraphQL) // Updated type to LocalizedString
  name: LocalizedStringGraphQL;

  @Column("jsonb")
  @Field(() => LocalizedStringGraphQL) // Updated type to LocalizedString
  description: LocalizedStringGraphQL;

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


  @OneToMany(() => SectionEntity, (section) => section.course)
  @Field(() => [SectionEntity], { nullable: true })
  sections: SectionEntity[];

  @OneToMany(() => UserProgressEntity, (progress) => progress.course)
  @Field(() => [UserProgressEntity], { nullable: true })
  userProgress: UserProgressEntity[];
}