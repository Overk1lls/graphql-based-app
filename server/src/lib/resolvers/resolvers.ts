import { IFetchDate } from "../../interfaces/dto/fetchDate.dto";
import { IUser } from "../../interfaces/dto/user.dto";
import { APIError } from "../../errors/api.error";
// import { IResolvers } from "../../interfaces/resolvers";
import { IResolvers } from "apollo-server-express";
import { config as dotenvInit } from "dotenv";
import { ErrorCode } from "../../interfaces/error.interface";
import { Db } from "mongodb";
import { Errors } from "../config";

dotenvInit();

const {
    USERS_DB,
    DATES_DB
} = process.env;

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

            if (!user) {
                throw new APIError(
                    ErrorCode.NOT_FOUND,
                    Errors.USER_NOT_FOUND
                );
            }
            return user;
        },
        totalUsers: async (
            parent,
            args,
            { db }: { db: Db }
        ): Promise<number> => {
            try {
                return await db
                    .collection(USERS_DB)
                    .estimatedDocumentCount();
            } catch (err) {
                throw new APIError(
                    ErrorCode.SERVER,
                    err.message
                );
            }
        },
        allUsers: async (
            parent,
            args,
            { db }: { db: Db }
        ) => {
            const users = await db
                .collection(USERS_DB)
                .find()
                .sort({ name: 1 })
                .toArray() as IUser[];

            if (!users) {
                throw new APIError(
                    ErrorCode.NOT_FOUND,
                    Errors.USERS_NOT_FOUND
                );
            }
            return users;
        },
        getDate: async (
            parent,
            args,
            { db }: { db: Db }
        ) => {
            const date = await db
                .collection(DATES_DB)
                .findOne() as IFetchDate;

            if (!date || !date.fetchDate) {
                throw new APIError(
                    ErrorCode.NOT_FOUND,
                    Errors.DATE_NOT_FOUND
                );
            }
            return date.fetchDate;
        }
    }
};