import { ApolloServer } from 'apollo-server-express';
import { config } from 'dotenv';
import { readFileSync } from 'fs';
import express from 'express';
import MongoDbService from './mongodb.service';
import resolvers from './lib/resolvers/resolvers';
const expressPlayground = require('graphql-playground-middleware-express').default;
const typeDefs = readFileSync('./src/lib/schema/schema.graphql', 'utf-8');

config();

const start = async () => {
  const { MONGODB_URI, PORT } = process.env;

  const mongoDbService = new MongoDbService(MONGODB_URI);
  await mongoDbService.connect();
  const db = mongoDbService.collection;
  const context = { db };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context
  });
  const app = express();

  server.applyMiddleware({ app });
  app.get('/playground', expressPlayground({ endpoint: '/graphql' }));
  app.listen(PORT || 4000, () => console.log(`GraphQL Service Running @ http://localhost:4000${server.graphqlPath}`));
};

start();