import { Field, ID, ObjectType, Authorized } from 'type-graphql'
import { Matches } from 'class-validator'

@ObjectType()
export default class AppsSchema {
  @Field()
  id!: string
  @Field()
  name!: string
  @Field()
  createdAt!: string
  @Field()
  updatedAt!: string
  @Field()
  acessedAt!: string
}
