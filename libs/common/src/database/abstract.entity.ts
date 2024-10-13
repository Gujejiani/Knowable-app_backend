import { Field, ID } from "@nestjs/graphql";
import { PrimaryGeneratedColumn } from "typeorm";



export class AbstractEntity<T> {
    @PrimaryGeneratedColumn()
    @Field(() => ID) // Add this decorator to expose 'id' in the GraphQL schema
    id: number;

    constructor(entity: Partial<T>) 
    {
        Object.assign(this, entity);
    }
}