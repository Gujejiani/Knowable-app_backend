import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { CourseEntity } from "../courses/entities/course.entity";
import { UserEntity } from "./user.entity";
import { UnitEntity } from "./unit.entity";
import { LessonEntity } from "./lesson.entity";
import { IStatusEnum } from "src/models";
import { SectionEntity } from "./section.entity";

@Entity()
@ObjectType()
export class UserProgressEntity {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @ManyToOne(() => UserEntity, (user) => user.progress)
    @Field(() => UserEntity)
    user: UserEntity;

    @ManyToOne(() => CourseEntity, (course) => course.userProgress, { nullable: true })
    @Field(() => CourseEntity, { nullable: true })
    course: CourseEntity;

    @ManyToOne(() => SectionEntity, (section) => section.userProgress, { nullable: true })
    @Field(() => SectionEntity, { nullable: true })
    section: SectionEntity;

    @ManyToOne(() => UnitEntity, (unit) => unit.userProgress, { nullable: true })
    @Field(() => UnitEntity, { nullable: true })
    unit: UnitEntity;

    @ManyToOne(() => LessonEntity, (lesson) => lesson.userProgress, { nullable: true })
    @Field(() => LessonEntity, { nullable: true })
    lesson: LessonEntity;

    @Column({ type: "enum", enum: IStatusEnum, default: IStatusEnum.locked })
    @Field(() => IStatusEnum)
    status: IStatusEnum;

    @Column("int", { array: true, default: () => "'{}'" })
    @Field(() => [Number], { nullable: true })
    completedChallenges: number[]; // Array of completed challenge IDs

    @Column({ type: 'timestamp', nullable: true })
    @Field(() => Date, { nullable: true })
    unlockedAt: Date;

    @Column({ type: 'timestamp', nullable: true })
    @Field(() => Date, { nullable: true })
    completedAt: Date;
}