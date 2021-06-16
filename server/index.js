const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const fs = require('fs');
const typeDefs = fs.readFileSync('./src/schema.graphql', 'utf-8');
const resolvers = require('./src/resolvers');
const expressPlayground = require('graphql-playground-middleware-express').default;
const fetch = require('node-fetch');
const { MongoClient } = require('mongodb');
const cron = require('node-cron');

require('dotenv').config();

var db;

const query = `
{
  cognito {
    user1: user(id: 1) {
      name
    }
    user2: user(id: 5522) {
      name
    }
    user3: user(id: 5525) {
      name
    }
  }
}
`;
const real_users = [
  {
    name: 'Бабій Ігор Володимирович',
    username: 'young_15',
    specialization: 'Кібербезпека',
    group: 'КБ-91'
  },
  {
    name: 'Бова Нікіта Сергійович',
    username: 'nikwin12',
    specialization: 'Електротехнічні системи електроспоживання',
    group: 'ЕТ-91'
  },
  {
    name: 'Бовкун Дмитро Олексійович',
    username: 'Dmitry_Bovkun',
    specialization: 'Кібербезпека',
    group: 'КБ-91'
  },
  {
    name: 'Бугаєц Павло Ігорович',
    username: 'Pavlo_Bugaets',
    specialization: 'Комп`ютеризовані системи управління та робототехніка',
    group: 'СУ-91'
  },
  {
    name: 'Васильченко Микола Анатолійович',
    username: 'Poochie',
    specialization: 'Наука про дані та моделювання складних систем',
    group: 'ПМ.м-01'
  },
  {
    name: 'Демченко Катерина Романівна',
    username: 'katerina_kd',
    specialization: 'Прикладна математика',
    group: 'ПМ-91'
  },
  {
    name: 'Квітницький Роман Олександрович',
    username: 'roman_kv',
    specialization: 'Кібербезпека',
    group: 'КБ-91'
  },
  {
    name: 'Кіхтенко Дмитро Євгенійович',
    username: 'dima_kihtenko',
    specialization: 'Кібербезпека',
    group: 'КБ-91'
  },
];

async function start() {
  const app = express();

  try {
    const client = await MongoClient.connect(
      process.env.DB_HOST,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    db = client.db('gql-app-db');
  } catch (err) {
    console.log(`Database connection error thrown: ${err}`);
    process.exit(1);
  }

  const context = { db };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context
  });

  server.applyMiddleware({ app });
  app.get('/', (req, res) => res.end('Welcome to the GraphQL application'));
  app.get('/playground', expressPlayground({ endpoint: '/graphql' }));
  app.listen({ port: 4000 }, () => console.log(`GraphQL Service Running @ http://localhost:4000${server.graphqlPath}`));

  let date = new Date();

  try {
    await db.collection('dates').deleteOne({});
    await db.collection('dates').insertOne({
      fetchDate: {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      }
    });

  } catch (err) {
    console.log(err);
  }

  fetch(process.env.FETCH_TOKEN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=password&username=${process.env.USER}&password=${process.env.PASSWORD}`
  })
    .then(res => res.json())
    .then((data) => {
      fetch(process.env.FETCH_SITE, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${data.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: query })
      })
        .then(res => res.json())
        .then(await = (res) => {
          db.collection('test').deleteMany({});
          db.collection('test').insertOne(res);
        })
        .catch(err => console.log(`Error thrown: ${err}`));
    })
    .catch(err => console.log(`Error thrown: ${err}`));

  // await createUsers(8);
}

start();

async function createUsers(num) {
  await db.collection('users').deleteMany({});
  await db.collection('real_users').deleteMany({});

  var { results } = await fetch(`https://randomuser.me/api/?results=${num}`).then(res => res.json());
  const users = results.map((user, index) => ({
    id: index,
    // name: `${user.name.first} ${user.name.last}`,
    // username: user.login.username,
    problems: user.registered.age,
    solves: user.dob.age,
    location: {
      country: user.location.country,
      city: user.location.city
    },
    avatar: user.picture.large,
    ...real_users[index]
  }));

  await db.collection('real_users').insertMany(users);

  return users;
}