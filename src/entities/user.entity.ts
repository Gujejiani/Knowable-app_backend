import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserProgressEntity } from "./UserProgress.entity";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;


    @OneToMany(() => UserProgressEntity, (progress) => progress.user)
    progress: UserProgressEntity[];
}
