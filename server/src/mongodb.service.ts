import { Db, MongoClient } from "mongodb";

export default class MongoDbService {
    private _db: Db;
    private _collection: string;
    private _client: MongoClient;

    constructor(connection: string) {
        this._client = new MongoClient(connection);
        this._collection = connection.split('/').pop().split('?')[0];
    }

    public connect = async () => {
        await this._client.connect();
        this._db = this._client.db(this._collection);
        console.log('Successfully connected to database:', this._db.databaseName);
    };

    public get collection(): Db {
        return this._db;
    }
};