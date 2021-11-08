import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class DonationCreateInput {

    @Field(() => Int, {nullable:false})
    count!: number;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    displayName!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    mobile?: string;

    @Field(() => String, {nullable:true})
    team?: string;

    @Field(() => String, {nullable:true})
    message?: string;
}
