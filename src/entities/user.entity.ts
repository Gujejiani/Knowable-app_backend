import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserProgress } from "./UserProgress.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;


    @OneToMany(() => UserProgress, (progress) => progress.user)
    progress: UserProgress[];
}
