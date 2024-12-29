import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsInt, Min } from "class-validator";

@InputType()
export class UnlockedSectionInput {
    @Field()
    @IsInt()
    id: number;
    @Field()
    unlockedAt: Date;
}

@InputType()
export class UnlockedUnitInput {
    @Field()
    @IsInt()
    id: number;

    @Field()
    @Min(0)
    progress: number;

    @Field()
    unlockedAt: Date;
}

@InputType()
export class CompletedLessonInput {
    @Field()
    @IsInt()
    id: number;

    @Field()
    completedAt: Date;
}


@ObjectType()
export class UnlockedSection {
    @Field()
    id: number;

    @Field(() => Date)
    unlockedAt: Date;
}


@ObjectType()
export class UnlockedUnit {
    @Field()
    id: number;

    @Field()
    progress: number;

    @Field(() => Date)
    unlockedAt: Date;
}

@ObjectType()
export class CompletedLesson {
    @Field()
    id: number;

    @Field(() => Date)
    completedAt: Date;
}