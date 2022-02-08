import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClientService from './lib/ApolloClient.service';
import { ApolloProvider } from 'react-apollo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const apolloClientService = new ApolloClientService();
const apolloClient = apolloClientService.client;

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);