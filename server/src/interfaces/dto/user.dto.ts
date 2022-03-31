import { ObjectId } from 'mongodb';

export interface IUser {
    _id?: ObjectId,
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
}
