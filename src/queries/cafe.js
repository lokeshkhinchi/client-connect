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
          location
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
            location
          }
        }
      }
  }
`;


export const CREATE_CAFE = gql`
  mutation CreateCafe($name: String!, $Variant: String!, $competitor: [CompetitorInput]!, $people: [PeopleInput]!, $location: LocationInput!) {
    createCafe(data: { name: $name, Variant: $Variant, competitor: $competitor, people: $people, location: $location }) {
      name
      Variant
      competitor {
        name
        Expectation
      }
      people {
        Role
        name
        mobile_number
      }
      location {
        lat
        long
      }
    }
  }
`;


export const UPLOAD_IMAGE_MUTATION = gql`
  mutation uploadFile($file: Upload!) {
    upload(file: $file) {
      data {
        id
        attributes {
          url
        }
      }
    }
  }
`;