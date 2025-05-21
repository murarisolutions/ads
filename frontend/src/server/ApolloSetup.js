// src/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql', // Update if you're hosting on a different port
  cache: new InMemoryCache(),
});

export default client;
