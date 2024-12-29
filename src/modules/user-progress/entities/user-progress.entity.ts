import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { UserEntity } from "src/entities/user.entity";
import { CourseEntity } from "src/modules/courses/entities/course.entity";
import { AbstractEntity } from "common/common";
import { CompletedLesson, UnlockedSection, UnlockedUnit } from "../models/progress-graphql.helper";


@Entity()
@ObjectType()
export class UserProgressEntity extends AbstractEntity<UserProgressEntity> {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @ManyToOne(() => UserEntity, (user) => user.progress, { onDelete: 'CASCADE' })
    @Field(() => UserEntity)
    user: UserEntity;

    @ManyToOne(() => CourseEntity, (course) => course.userProgress, {onDelete: 'CASCADE'})
    @Field(() => CourseEntity)
    course: CourseEntity;

    @Column({ default: 0 })
    @Field(() => Number)
    progressPercentage: number;

    // Now stores section IDs with timestamps or extra data
    @Column("jsonb", { default: () => "'[]'" })
    @Field(() => [UnlockedSection], { nullable: true })
    unlockedSections: { id: number; unlockedAt: Date }[];

    // Store units with metadata (e.g., progress, unlock date)
    @Column("jsonb", { default: () => "'[]'" })
    @Field(() => [UnlockedUnit], { nullable: true })
    unlockedUnits: { id: number; progress: number; unlockedAt: Date }[];

    // Store completed lessons with completion time
    @Column("jsonb", { default: () => "'[]'" })
    @Field(() => [CompletedLesson], { nullable: true })
    completedLessons: { id: number; completedAt: Date }[];

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    @Field(() => Date)
    updatedAt: Date;


    @Column({nullable: true})
    @Field()
    courseId: number; 

    @Column({nullable: true})
    @Field()
    userId: number; 





}
