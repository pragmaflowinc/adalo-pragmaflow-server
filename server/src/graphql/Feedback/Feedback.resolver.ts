import { Arg, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { ToDoList } from "../../entity/ToDoList";
import { Feedback } from "../../entity/Feedback";

import fs from 'fs';
import path from 'path';
import mustache from 'mustache';
import mjml from 'mjml';

import { mailClient } from '../../utils/email'
import { NOTIFICATION_EMAIL } from '../../utils/config'

const templateFeedback = fs.readFileSync(path.join(__dirname, "../../email-templates/feedback-submitted.mjml"), "utf8");

@Service()
@Resolver()
export class FeedbackResolver {
  @Mutation(returns => Boolean)
  async submitFeedback(
    @Arg("content") content: string,
    @Arg("email", { nullable: true }) email?: string,
    @Arg("subject", { nullable: true }) subject?: string
  ) {
    //console.log(content)
    //console.log(email)
    //console.log(subject)
    try {
      await Feedback.create({
        email,
        subject,
        content
      }).save()

      const renderedEmail = mustache.render(templateFeedback, { 
        email, 
        subject, 
        content,
        createdAt: new Date()
      });
      const html = mjml(renderedEmail).html;

      const result = await mailClient.sendMail({
        from: "Adalo PragmaflowServers <adalo.pragmaflow@gmail.com>",
        to: NOTIFICATION_EMAIL,
        subject: "Adalo Components Feedback Submitted",
        html
      });

      return true
    } catch {

    }
    return false
  }
}