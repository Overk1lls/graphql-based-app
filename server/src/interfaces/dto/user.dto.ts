import { Document, ObjectId, WithId } from "mongodb";

export interface IUser extends WithId<Document> {
    _id: ObjectId,
    id: number,
    name: string,
    username: string,
    problems: number,
    solves: number,
    location: {
        country: string,
        city: string
    },
    avatar: string
};