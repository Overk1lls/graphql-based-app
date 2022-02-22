import { ApolloServer } from 'apollo-server-express';
import { config as dotenvInit } from 'dotenv';
import { readFileSync } from 'fs';
import { createApp } from './middleware/app';
import MongoDbService from './services/mongodb.service';
import resolvers from './lib/resolvers/resolvers';
<<<<<<< HEAD
import IContext from './interfaces/context';
const expressPlayground = require('graphql-playground-middleware-express').default;
const typeDefs = readFileSync('./src/lib/schema/schema.graphql', 'utf-8');
=======
>>>>>>> development

dotenvInit();

const {
  MONGODB_URI,
  PORT
} = process.env;

const typeDefs = readFileSync('./src/lib/schema/schema.graphql', 'utf-8');
export const mongodb = new MongoDbService(MONGODB_URI);
export const app = createApp();

<<<<<<< HEAD
const { MONGODB_URI, PORT } = process.env;

const start = async () => {
  const mongoDbService = new MongoDbService(MONGODB_URI);
  await mongoDbService.connect();
  const db = mongoDbService.db;
  const context: IContext = { db };
  
=======
const start = async () => {
  await mongodb.connect();

  const db = mongodb.collection;
  const context = { db };

>>>>>>> development
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context
  });
<<<<<<< HEAD
  const app = express();
  
=======

>>>>>>> development
  server.applyMiddleware({ app });

  app.listen(PORT || 4000, () => {
    console.log(`GraphQL Service Running @ http://localhost:${PORT}${server.graphqlPath}`);
  });
};

start().catch(err => {
  console.error(err);
  process.exit(1);
});