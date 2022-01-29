import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { Container } from "typedi";
import { AdaloResolver } from "./graphql/Adalo/Adalo.resolver";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import path from "path";
import { createConnections } from "typeorm";
import { DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_URL, DATABASE_NAME } from "./utils/config";
import { Component } from "./entity/Component";
import { ComponentResolver } from "./graphql/Components/Component.resolver";
import { VimeoVideo } from "./entity/VimeoVideo";
import { ToDoList } from "./entity/ToDoList";
import { HowToVideoResolver } from "./graphql/HowToVideos/HowToVideo.resolver";
import { CurrentWorkResolver } from "./graphql/CurrentWork/CurrentWork.resolver";
import { Feedback } from "./entity/Feedback";
import { FeedbackResolver } from "./graphql/Feedback/Feedback.resolver";

(async () => {
  await createConnections([
    {
      name: "default",
      type: "postgres",
      url: `postgres://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_URL}/${DATABASE_NAME}`,
      logging: true,
      synchronize:false,
      migrationsRun: true,
      migrations: [path.join(__dirname, "./migration/*")],
      entities: [
        Component,
        VimeoVideo,
        ToDoList,
        Feedback
      ]
    }
  ])
  const schema = await buildSchema({
    resolvers: [
      AdaloResolver,
      ComponentResolver,
      HowToVideoResolver,
      CurrentWorkResolver,
      FeedbackResolver
    ],
    emitSchemaFile: true,
    container: Container,
    validate: false,
  });
  const server = new ApolloServer({
    schema,
    context: async ({ req, res }) => {
      return { req, res };
    },
  });
  const app = express();
  server.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: ["http://localhost:3000", "http://localhost:8080"],
    },
    bodyParserConfig: {
      limit: "10mb",
    },
  });

  app.use(express.static(path.join(__dirname, "client")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/index.html"));
  });

  app.listen(8080, () => {
    console.log(`[App]: Listening on port ${8080}`);
  });
})().catch(e => console.error("Something went terribly wrong", e)) 