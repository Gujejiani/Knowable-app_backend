import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Unit } from './unit.entity';
import { Lesson } from './lesson.entity';
import { LanguageHeaderBackgroundEnum } from 'src/models';

@Entity()
export class Module {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('jsonb')
  name: Record<string, string>;

  @Column('jsonb')
  description: Record<string, string>;

  @Column({ nullable: true })
  imageUrl?: string;

  @Column({ nullable: true })
  icon?: string;

  @Column()
  count: number;

  @Column({
    type: 'enum',
    enum: LanguageHeaderBackgroundEnum,
  })
  moduleColor: LanguageHeaderBackgroundEnum;

  @ManyToOne(() => Unit, (unit) => unit.modules)
  unit: Unit;

  @OneToMany(() => Lesson, (lesson) => lesson.module, { cascade: true })
  lessons: Lesson[];
}
