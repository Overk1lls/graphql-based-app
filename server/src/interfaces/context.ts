import { Db } from "mongodb";

export default interface IContext {
    db: Db;
};