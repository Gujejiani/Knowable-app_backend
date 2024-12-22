import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { UserEntity } from "./user.entity";
import { CourseEntity } from "../modules/courses/entities/course.entity";

@Entity()
@ObjectType()
export class UserProgressEntity {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @ManyToOne(() => UserEntity, (user) => user.progress)
    @Field(() => UserEntity)
    user: UserEntity;

    @ManyToOne(() => CourseEntity, (course) => course.userProgress)
    @Field(() => CourseEntity)
    course: CourseEntity;

    @Column("int", { array: true, default: () => "'{}'" })
    @Field(() => [Number], { nullable: true })
    unlockedSections: number[];

    @Column("int", { array: true, default: () => "'{}'" })
    @Field(() => [Number], { nullable: true })
    unlockedUnits: number[];

    @Column("int", { array: true, default: () => "'{}'" })
    @Field(() => [Number], { nullable: true })
    completedLessons: number[];
}
