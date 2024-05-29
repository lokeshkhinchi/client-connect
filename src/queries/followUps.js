import { gql } from 'graphql-request';

export const GET_FOLLOWUPS = gql`
query GetFollowUps($limit: Int, $start: Int) {
    followUps(pagination: { limit: $limit, start: $start }) {
            meta {
              pagination {
                total
                page
                pageSize
                pageCount
              }
            }
        data {
            attributes {
            nextVisit
            status
            note
            cafe {
                data {
                attributes {
                    name
                    location
                    offered_pricing {
                    flavour
                    quantity
                    }
                    photo {
                    data {
                        attributes {
                        url
                        }
                    }
                    }
                    people {
                    name
                    mobile_number
                    Role
                    }
                }
                }
            }
            }
        }
        }
    }  
`;

export const GET_FOLLOWUPS_BY_ID = gql`
query GetFollowUpsById($id: ID!) {
    followUp(id:$id) {
        data {
            attributes {
            nextVisit
            status
            note
            cafe {
                data {
                attributes {
                    name
                    location
                    offered_pricing {
                    flavour
                    quantity
                    }
                    photo {
                    data {
                        attributes {
                        url
                        }
                    }
                    }
                    people {
                    name
                    mobile_number
                    Role
                    }
                }
                }
            }
            }
        }
        }
    }  
`;


  
export const CREATE_FOLLOWUP = gql`
  mutation CreateFollowUp($data: FollowUpInput!) {
    createFollowUp(data: $data) {
      data {
        id
        attributes {
          cafe {
            data {
              id
              attributes {
                name
              }
            }
          }
          isReadyForOrder
          nextVisit
          status
          note
          sample_date
        }
      }
    }
  }
`;


export const UPDATE_FOLLOWUP = gql`
  mutation UpdateFollowUp($id: ID!, $data: FollowUpInput!) {
    updateFollowUp(id: $id, data: $data) {
      data {
        id
        attributes {
          nextVisit
          status
          note
          isReadyForOrder
          sample_date
          cafe {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;