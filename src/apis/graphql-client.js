import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://minato-crm-backend.onrender.com/graphql';

let token = null;

export const setToken = (newToken) => {
  token = newToken;
};


export const createGraphQLClient = (token) => {
  return new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
