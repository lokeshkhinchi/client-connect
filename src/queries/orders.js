import { gql } from 'graphql-tag';

export const GET_ORDERS = gql`
  query GetOrders($limit: Int, $start: Int) {
    orders(pagination: { limit: $limit, start: $start }) {
      data {
        attributes {
          sales_person
          delivery_info
          status
          SKU {
            flavour
            quantity
          }
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
