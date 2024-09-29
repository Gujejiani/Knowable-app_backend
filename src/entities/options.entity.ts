import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ChallengeEntity } from "./challenge.entity";


@Entity()
export class OptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  optionText: string;

  @Column("boolean")
  isCorrect: boolean;

  @ManyToOne(() => ChallengeEntity, (challenge) => challenge.options)
  challenge: ChallengeEntity;
}
