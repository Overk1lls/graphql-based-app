import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { persistCache } from 'apollo-cache-persist';

const storageLabel = 'apollo-cache-persist';
const server = 'http://localhost:4000/graphql';

export default class ApolloClientService {
    #cache;
    #client;

    constructor() {
        this.#cache = new InMemoryCache();
        persistCache({
            cache: this.#cache,
            storage: localStorage
        });
        if (localStorage[storageLabel]) {
            const cacheData = JSON.parse(localStorage[storageLabel]);
            this.#cache.restore(cacheData);
        }
        this.#client = new ApolloClient({
            cache: this.#cache,
            uri: server
        });
    }

    get client() {
        return this.#client;
    };
};