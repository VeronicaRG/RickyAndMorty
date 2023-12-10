import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client';
import { API_ADDRESS } from '@env';

const httpLink = createHttpLink({ uri: API_ADDRESS });

export const apolloClient = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache(),
});
