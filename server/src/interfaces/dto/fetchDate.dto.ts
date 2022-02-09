import { ObjectId } from "mongodb";

export default interface IFetchDate {
    _id: ObjectId,
    fetchDate: {
        hours: number,
        minutes: number,
        seconds: number
    }
};