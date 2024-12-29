import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsArray, IsOptional, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CompletedLessonInput, UnlockedSectionInput, UnlockedUnitInput } from '../models/progress-graphql.helper';



@InputType()
export class CreateUserProgressInput {
    @Field(() => Int)
    @IsInt()
    userId: number;

    @Field(() => Int)
    @IsInt()
    courseId: number;

    @Field(() => Int, { defaultValue: 0 })
    @IsOptional()
    @Min(0)
    progressPercentage?: number;

    @Field(() => [UnlockedSectionInput], { nullable: true })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UnlockedSectionInput)
    @IsOptional()
    unlockedSections?: UnlockedSectionInput[];

    @Field(() => [UnlockedUnitInput], { nullable: true })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UnlockedUnitInput)
    @IsOptional()
    unlockedUnits?: UnlockedUnitInput[];

    @Field(() => [CompletedLessonInput], { nullable: true })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CompletedLessonInput)
    @IsOptional()
    completedLessons?: CompletedLessonInput[];

    @Field({ nullable: true })
    @IsOptional()
    updatedAt?: Date;
}
