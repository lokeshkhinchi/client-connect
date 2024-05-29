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
query GetCafes($limit: Int, $start: Int) {
    cafes(pagination: { limit: $limit, start: $start }) {
        meta {
          pagination {
            total
            page
            pageSize
            pageCount
          }
        }
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

export const UPDATE_CAFE = gql`
  mutation UpdateCafe($id: ID!, $name: String, $Variant: String, $competitor: [CompetitorInput], $people: [PeopleInput], $location: LocationInput) {
    updateCafe(id: $id, data: { name: $name, Variant: $Variant, competitor: $competitor, people: $people, location: $location }) {
      id
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