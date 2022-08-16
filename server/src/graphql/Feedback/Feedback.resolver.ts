import { Arg, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { ToDoList } from "../../entity/ToDoList";
import { createTransport } from 'nodemailer'
import { Feedback } from "../../entity/Feedback";

@Service()
@Resolver()
export class FeedbackResolver {
  @Mutation(returns => Boolean)
  async submitFeedback(
    @Arg("content") content: string,
    @Arg("email", { nullable: true }) email?: string,
    @Arg("subject", { nullable: true }) subject?: string
  ) {
    console.log(content)
    console.log(email)
    console.log(subject)
    try {
      await Feedback.create({
        email,
        subject,
        content
      }).save()
      return true
    } catch {

    }
    return false
  }
}