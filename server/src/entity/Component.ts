import { ObjectType, Field } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@ObjectType()
@Entity({ name: "Component" })
export class Component extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    componentId!: string;

    @Field()
    @Column()
    name!: string;

    @Field()
    @Column()
    libraryName!: string;

    @Field()
    @Column()
    description!: string;

    @Field()
    @Column()
    githubUrl!: string;

    @Field()
    @Column()
    youtubeUrl!: string;

    @Field()
    @Column()
    icon!: string;
}
