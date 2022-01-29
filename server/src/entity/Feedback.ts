import { ObjectType, Field } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@ObjectType()
@Entity({ name: "Feedback" })
export class Feedback extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    email!: string;

    @Field()
    @Column()
    subject!: string;

    @Field()
    @Column()
    content!: string;
}
