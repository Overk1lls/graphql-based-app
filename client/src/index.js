import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { persistCache } from 'apollo-cache-persist';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const cache = new InMemoryCache();
persistCache({
  cache,
  storage: localStorage
});

if (localStorage['apollo-cache-persist']) {
  let cacheData = JSON.parse(localStorage['apollo-cache-persist']);
  cache.restore(cacheData);
}

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);