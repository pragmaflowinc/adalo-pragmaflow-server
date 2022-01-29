import { ObjectType, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { ToDoList } from "../../entity/ToDoList";

@Service()
@Resolver(ToDoList)
export class CurrentWorkResolver {
  @Query(returns => [ToDoList])
  async getToDoList() {
    return ToDoList.find()
  }
}