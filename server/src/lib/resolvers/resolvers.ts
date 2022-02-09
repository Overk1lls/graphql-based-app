import IFetchDate from "../../interfaces/dto/fetchDate.dto";
import IUser from "../../interfaces/dto/user.dto";
// import IResolvers from "../../interfaces/resolvers";
import { IResolvers } from "apollo-server-express";
import { config } from "dotenv";

config();

const { USERS_DB, DATES_DB } = process.env;

const resolvers: IResolvers = {
    Query: {
        user: async (parent, { username }, { db }) => await db.collection(USERS_DB).findOne({ username }) as IUser,
        totalUsers: async (parent, args, { db }) => await db.collection(USERS_DB).estimatedDocumentCount(),
        allUsers: async (parent, args, { db }) => await db.collection(USERS_DB).find().sort({ name: 1 }).toArray() as IUser[],
        getDate: async (parent, args, { db }) => {
            const date = await db.collection(DATES_DB).findOne() as IFetchDate;
            return date.fetchDate;
        }
    }
};

export default resolvers;