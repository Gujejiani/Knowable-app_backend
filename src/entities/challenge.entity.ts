import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Lesson } from './lesson.entity';
import { ChallengeStatus, ChallengeStatusEnum } from 'src/models';

@Entity()
export class Challenge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  type: 'task' | 'exam' | 'quiz' | 'insert-suggestion';

  @Column('text')
  content: string; // Could be expanded for multimedia

  @Column({
    type: 'enum',
    enum: ChallengeStatusEnum,
  })
  status: ChallengeStatus;

  @ManyToOne(() => Lesson, (lesson) => lesson.challenges)
  lesson: Lesson;

  @Column('jsonb')
  options: { id: number; optionText: string; isCorrect: boolean }[];
}
