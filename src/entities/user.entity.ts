import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { UserProgressEntity } from "src/modules/user-progress/entities/user-progress.entity";

@Entity()
@ObjectType() // This decorator is crucial for making this class available to the GraphQL schema
export class UserEntity {
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
