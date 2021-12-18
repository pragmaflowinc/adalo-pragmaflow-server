
import { Field, ID, ObjectType, Authorized } from 'type-graphql'
import { Matches } from 'class-validator'


@ObjectType()
export class OrganizationLibrarySchema  {
  @Field()
  OrganizationId!: number
  @Field()
  LibraryId?: string
  @Field()
  createdAt!: string
  @Field()
  updatedAt!: string
}

@ObjectType()
export class LibrarySchema {
  @Field()
  id!: string
  @Field({ nullable: true })
  name!: string
  @Field()
  createdAt!: string
  @Field()
  updatedAt!: string
  @Field(type => OrganizationLibrarySchema)
  OrganizationLibrary?: OrganizationLibrarySchema
}

@ObjectType()
export class InvitationSchema {
  @Field()
  id!: number
  @Field()
  OrganizationId!: number
  @Field({ nullable: true })
  appId?: string
  @Field()
  email!: string
  @Field()
  createdByUserId!: number
  @Field()
  expiresAt!: string
  @Field()
  createdAt!: string
  @Field()
  updatedAt!: string
}

@ObjectType()
export class OrganizationUserSchema {
  @Field()
  OrganizationId!: number
  @Field()
  UserId!: number
}

@ObjectType()
export class AdaloUserSchema {
  @Field()
  id!: number
  @Field()
  name!: string
  @Field()
  email!: string
  @Field()
  password!: string
  @Field()
  developer!: boolean
  @Field({ nullable: true })
  ip?: string
  @Field()
  createdAt!: string
  @Field()
  updatedAt!: string
  @Field(type => OrganizationUserSchema)
  OrganizationUser!: OrganizationUserSchema
}


@ObjectType()
export default class OrganizationSchema {
  @Field()
  id!: number
  @Field()
  name!: string
  @Field()
  createdAt!: string
  @Field()
  updatedAt!: string
  @Field(type => [AdaloUserSchema])
  Users!: AdaloUserSchema[]
  @Field(type => [InvitationSchema])
  Invitations!: InvitationSchema[]
  @Field(type => OrganizationUserSchema)
  OrganizationUser!: OrganizationUserSchema
}
