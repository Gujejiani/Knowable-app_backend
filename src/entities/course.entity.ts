import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Section } from './section.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('jsonb') // Assuming this holds a localized string for multiple languages
  name: Record<string, string>;

  @Column('jsonb')
  description: Record<string, string>;

  @Column({ nullable: true })
  imageUrl?: string;

  @Column({ nullable: true })
  icon?: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToMany(() => Section, (section) => section.language, { cascade: true })
  sections: Section[];
}
