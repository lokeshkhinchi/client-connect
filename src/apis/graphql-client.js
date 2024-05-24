import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://localhost:1337/graphql'; // Replace with your Strapi GraphQL endpoint

let token = null;

export const setToken = (newToken) => {
  token = newToken;
};

export const getGraphQLClient = new GraphQLClient(endpoint, {
  headers: () => ({
    Authorization: `Bearer ${token}`,
  }),
});