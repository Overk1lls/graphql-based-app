import { MongoDbService } from './services/mongodb.service';
import { resolvers } from './lib/resolvers/resolvers';
import { ApolloServer } from 'apollo-server-express';
import { config as dotenvInit } from 'dotenv';
import { readFileSync } from 'fs';
import { createApp } from './middleware/app';

dotenvInit();

const {
  MONGODB_URI,
  PORT
} = process.env;

const typeDefs = readFileSync('./src/lib/schema/schema.graphql', 'utf-8');
export const mongodb = new MongoDbService(MONGODB_URI);
export const app = createApp();

const start = async () => {
  await mongodb.connect();

  const db = mongodb.db;
  const context = { db };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context
  });
  server.applyMiddleware({ app });

  app.listen(PORT || 4000, () => {
    console.log(`GraphQL Service Running @ http://localhost:${PORT}${server.graphqlPath}`);
  });
};

start().catch(err => {
  console.error(err);
  process.exit(1);
});
