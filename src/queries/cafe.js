import { gql } from 'graphql-request';

export const GET_CAFES_BY_ID = gql`
  query GetCafeById($id: ID!) {
    cafe(id: $id) {
      data {
        id
        attributes {
          name
          photo {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;


export const GET_CAFES = gql`
  query {
    cafes {
        data {
          id
          attributes {
            name
            photo {
              data {
                attributes {
                  formats 
                }
              }
            }
          }
        }
      }
  }
`;

