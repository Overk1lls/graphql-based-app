import { fetchAPI } from "../lib/utils";

export default class GraphQLService {
    private _token: string;
    private _users: Object[];

    constructor(url: string, headers: HeadersInit, body: BodyInit) {
        fetchAPI(url, 'POST', headers, body)
            .then((token: string) => {
                this._token = token
            });
    }

    public fetchEOlymp = (url: string, method: string, headers: HeadersInit, body: BodyInit) => {
        headers = {
            ...headers,
            'Authorization': `Bearer ${this._token}`
        };
        return fetchAPI(url, method, headers, body);
    };

    public get users(): Object[] {
        return this._users;
    }
};