import { BodyInit, HeadersInit } from 'node-fetch';
import { fetchAPI } from '../lib/utils';

export default class GraphQLService {
    private _token: string;
    private _users: object[];

    constructor(url: string, headers: HeadersInit, body: BodyInit) {
        fetchAPI({ url, method: 'POST', headers, body })
            .then((token: string) => this._token = token);
    }

    fetchEOlymp = async ({ url, method = 'GET', headers, body }: {
        url: string,
        method?: 'GET' | 'POST',
        headers?: HeadersInit,
        body?: BodyInit
    }) => fetchAPI({
        url,
        method,
        headers: {
            ...headers,
            authorization: `Bearer ${this._token}`
        },
        body
    });

    public get users(): object[] {
        return this._users;
    }
}
