import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { Container } from "typedi";
import { AdaloResolver } from "./graphql/Adalo/Adalo.resolver";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import path from "path";

(async () => {
  const schema = await buildSchema({
    resolvers: [
      AdaloResolver
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