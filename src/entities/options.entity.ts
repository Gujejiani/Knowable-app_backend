import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Challenge } from "./challenge.entity";


@Entity()
export class Option {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  optionText: string;

  @Column("boolean")
  isCorrect: boolean;

  @ManyToOne(() => Challenge, (challenge) => challenge.options)
  challenge: Challenge;
}
