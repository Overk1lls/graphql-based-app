import { Db, MongoClient } from 'mongodb';

export interface IDbConnection {
    connect: () => Promise<void>,
    disconnect: () => Promise<void>;
}

export class MongoDbService implements IDbConnection {
    private _db: Db;
    private _collection: string;
    private _client: MongoClient;

    constructor(connection: string) {
        this._client = new MongoClient(connection);
        this._collection = connection.split('/').pop().split('?')[0];
    }

    connect = async () => {
        await this._client.connect();
        this._db = this._client.db(this._collection);
        console.log('Successfully connected to the database:', this._db.databaseName);
    };

    disconnect = async () => this._client.close();

    public get db(): Db {
        return this._db;
    }
}
