import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course.entity";
import { User } from "./user.entity";
import { Section } from "./section.entity";
import { Unit } from "./unit.entity";
import { Lesson } from "./lesson.entity";
import { LessonStatus, LessonStatusEnum } from "src/models";

@Entity()
export class UserProgress {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.progress)
    user: User;

    @ManyToOne(() => Course, (course) => course.userProgress, { nullable: true })
    course: Course;

    @ManyToOne(() => Section, (section) => section.userProgress, { nullable: true })
    section: Section;

    @ManyToOne(() => Unit, (unit) => unit.userProgress, { nullable: true })
    unit: Unit;

    @ManyToOne(() => Lesson, (lesson) => lesson.userProgress, { nullable: true })
    lesson: Lesson;

    @Column({ type: "enum", enum: LessonStatusEnum })
    status: LessonStatus;

    @Column("int", { array: true, default: () => "'{}'" }) // This creates an integer array
    completedChallenges: number[]; // Array of completed challenge IDs

    @Column({ type: 'timestamp', nullable: true })
    unlockedAt: Date;

    @Column({ type: 'timestamp', nullable: true })
    completedAt: Date;
}
