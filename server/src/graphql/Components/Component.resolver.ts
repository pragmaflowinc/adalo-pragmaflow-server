import { ObjectType, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { Component } from "../../entity/Component";

@Service()
@Resolver(Component)
export class ComponentResolver {
  @Query(returns => [Component])
  async getComponents() {
    return Component.find()
  }
}