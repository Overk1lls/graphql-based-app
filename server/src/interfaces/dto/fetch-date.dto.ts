import { ObjectId } from 'mongodb';

export interface IFetchDate {
    _id: ObjectId,
    fetchDate: {
        hours: number,
        minutes: number,
        seconds: number
    }
}
