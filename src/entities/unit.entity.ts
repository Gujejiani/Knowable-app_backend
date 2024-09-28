import { Section } from './section.entity';
import { Module } from './module.entity';

import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Unit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('jsonb')
  name: Record<string, string>;

  @Column('jsonb')
  description: Record<string, string>;

  @ManyToOne(() => Section, (section) => section.units)
  section: Section;

  @OneToMany(() => Module, (module) => module.unit, { cascade: true })
  modules: Module[];
}
