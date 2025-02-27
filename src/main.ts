import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema as typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import { createModels } from "./models";
import { createServices } from "./services";
import dotenv from "dotenv";
import mongoose from "mongoose";

const config: any = dotenv.config().parsed;

const db = await mongoose.createConnection(config.DB_URI);

const models = createModels(db);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: config.PORT },
  context: async () => {
    return {
      services: createServices(models),
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
