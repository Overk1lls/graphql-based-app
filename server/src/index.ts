import { ApolloServer } from 'apollo-server-express';
import { config } from 'dotenv';
import { readFileSync } from 'fs';
import express from 'express';
import MongoDbService from './mongodb.service';
import resolvers from './lib/resolvers/resolvers';
import IContext from './interfaces/context';
const expressPlayground = require('graphql-playground-middleware-express').default;
const typeDefs = readFileSync('./src/lib/schema/schema.graphql', 'utf-8');

config();

const { MONGODB_URI, PORT } = process.env;

const start = async () => {
  const mongoDbService = new MongoDbService(MONGODB_URI);
  await mongoDbService.connect();
  const db = mongoDbService.db;
  const context: IContext = { db };
  
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