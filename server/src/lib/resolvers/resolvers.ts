import { IFetchDate } from '../../interfaces/dto/fetch-date.dto';
import { IUser } from '../../interfaces/dto/user.dto';
import { APIError } from '../../errors/api.error';
// import { IResolvers } from "../../interfaces/resolvers";
import { IResolvers } from 'apollo-server-express';
import { config as dotenvInit } from 'dotenv';
import { ErrorCode } from '../../interfaces/error.interface';
import { Db } from 'mongodb';

dotenvInit();

const { USERS_DB, DATES_DB } = process.env;

export const resolvers: IResolvers = {
    Query: {
        user: async (
            parent,
            { username }: { username: string },
            { db }: { db: Db }
        ) => {
            const user = await db
                .collection(USERS_DB)
                .findOne({ username }) as IUser;

            if (!user) throw new APIError(ErrorCode.NOT_FOUND);
            return user;
        },

        totalUsers: async (
            parent,
            args,
            { db }: { db: Db }
        ): Promise<number | APIError> =>
            await db
                .collection(USERS_DB)
                .estimatedDocumentCount()
                .catch(err => new APIError(ErrorCode.SERVER, err.message)),

        allUsers: async (parent, args, { db }: { db: Db }) => {
            const users = await db
                .collection(USERS_DB)
                .find()
                .sort({ name: 1 })
                .toArray() as IUser[];

            if (!users) throw new APIError(ErrorCode.NOT_FOUND);
            return users;
        },

        getDate: async (parent, args, { db }: { db: Db }) => {
            const date = await db.collection(DATES_DB).findOne() as IFetchDate;

            if (!date || !date.fetchDate) throw new APIError(ErrorCode.NOT_FOUND);
            return date.fetchDate;
        }
    }
};
