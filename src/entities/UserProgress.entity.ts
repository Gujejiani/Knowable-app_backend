import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CourseEntity } from "../courses/entities/course.entity";
import { UserEntity } from "./user.entity";
import { SectionEntity } from "./section.entity";
import { UnitEntity } from "./unit.entity";
import { LessonEntity } from "./lesson.entity";
import { IStatusEnum } from "src/models";

@Entity()
export class UserProgressEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UserEntity, (user) => user.progress)
    user: UserEntity;

    @ManyToOne(() => CourseEntity, (course) => course.userProgress, { nullable: true })
    course: CourseEntity;

    @ManyToOne(() => SectionEntity, (section) => section.userProgress, { nullable: true })
    section: SectionEntity;

    @ManyToOne(() => UnitEntity, (unit) => unit.userProgress, { nullable: true })
    unit: UnitEntity;

    @ManyToOne(() => LessonEntity, (lesson) => lesson.userProgress, { nullable: true })
    lesson: LessonEntity;

    @Column({ type: "enum", enum: IStatusEnum, default: IStatusEnum.locked })
    status: IStatusEnum;

    @Column("int", { array: true, default: () => "'{}'" }) // This creates an integer array
    completedChallenges: number[]; // Array of completed challenge IDs

    @Column({ type: 'timestamp', nullable: true })
    unlockedAt: Date;

    @Column({ type: 'timestamp', nullable: true })
    completedAt: Date;
}
