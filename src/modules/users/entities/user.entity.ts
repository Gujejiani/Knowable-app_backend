import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { UserProgressEntity } from "src/modules/user-progress/entities/user-progress.entity";
import { AbstractEntity } from "common/common";

@Entity()
@ObjectType() 
export class UserEntity extends AbstractEntity<UserEntity>  {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  username: string;

  @Column()
  @Field(() => String)
  email: string;

  @OneToMany(() => UserProgressEntity, (progress) => progress.user)
  @Field(() => [UserProgressEntity], { nullable: true })
  progress: UserProgressEntity[];
}
