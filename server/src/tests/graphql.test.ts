import { ApolloServer, IResolvers } from 'apollo-server-express';
import { readFileSync } from 'fs';
import { ObjectId } from 'mongodb';
import { users } from '../databases/users.db';
import { IFetchDate } from '../interfaces/dto/fetchDate.dto';

const typeDefs = readFileSync(
    './src/lib/schema/schema.graphql',
    'utf-8'
);

let date: IFetchDate;
let testServer: ApolloServer;

const resolvers: IResolvers = {
    Query: {
        user: (_, { username }: { username: string }) => {
            return users.filter(user => user.username === username)[0];
        },
        totalUsers: () => {
            return users.length;
        },
        allUsers: () => {
            return users;
        },
        getDate: () => {
            return date.fetchDate;
        },
    }
};

beforeAll(() => {
    date = {
        _id: new ObjectId(),
        fetchDate: {
            hours: 23,
            minutes: 6,
            seconds: 51
        }
    };
    testServer = new ApolloServer({
        typeDefs,
        resolvers
    });
});

it('Should return a user', async () => {
    const result = await testServer.executeOperation({
        query: `
            query GetUser($username: String!) {
                user(username: $username) {
                    name
                    group
                }
            }
        `,
        variables: {
            username: 'young_15'
        }
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.user).toEqual({
        name: users[0].name,
        group: users[0].group
    });
});

it('Should return users count', async () => {
    const result = await testServer.executeOperation({
        query: `
            {
                totalUsers
            } 
        `,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.totalUsers).toBe(8);
});

it('Should return all users', async () => {
    const result = await testServer.executeOperation({
        query: `
            {
                allUsers {
                    name
                    group
                }
            }
        `,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.allUsers).toContainEqual({
        name: users[0].name,
        group: users[0].group
    });
});

it('Should return fetch date', async () => {
    const result = await testServer.executeOperation({
        query: `
            {
                getDate {
                    hours
                    minutes
                    seconds
                }
            }
        `,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.getDate).toEqual(date.fetchDate);
});