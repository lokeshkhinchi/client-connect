import axios from 'axios';
import { CREATE_CAFE, UPLOAD_IMAGE_MUTATION } from '../queries/cafe';
import request from 'graphql-request';
const GRAPHQL_ENDPOINT = 'https://minato-crm-backend.onrender.com/graphql';

const baseURL = 'https://api.example.com'; // Replace with your API base URL

const apiService = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Set authentication token
export const setAuthToken = (token) => {
  if (token) {
    apiService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiService.defaults.headers.common['Authorization'];
  }
};

// Example function to fetch data
export const fetchData = async (endpoint) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await apiService.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Example function to post data
export const postData = async (endpoint, data) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await apiService.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const login = async (identifier, password)  => {
  const query = `
    mutation Login($identifier: String!, $password: String!) {
      login(input: { identifier: $identifier, password: $password, provider: "local" }) {
        jwt
        user {
          id
          username
          email
        }
      }
    }
  `;

  const variables = {
      identifier: identifier,
      password: password,
    };
  
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    });
  
    const data = await response.json();
  
    if (response.ok && data.data) {
      return data.data.login;
    } else {
      throw new Error(data.errors ? data.errors[0].message : 'Login failed');
    }
  }

// Example function to handle login
// export const login = async (credentials) => {
//   try {
//     const response = await apiService.post('/login', credentials);
//     const { token } = response.data;
    
//     // Set token in headers
//     setAuthToken(token);

//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// Example function to handle logout
export const logout = () => {
  // Clear token from headers
  setAuthToken(null);
};


export const uploadImageFile = async (file) => {
  const formData = new FormData();
  formData.append('operations', JSON.stringify({
    query: UPLOAD_IMAGE_MUTATION,
    variables: { file: null }
  }));
  formData.append('map', JSON.stringify({
    '0': ['variables.file']
  }));
  formData.append('0', file);

  console.log([...formData]);

  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: "Bearer 9e613c7a1e49c0ab08acd3971f4fc7a21ed790a9121694770bc238750e0de7e20a152dfafa5516b2b28e0009e2732ada7aa08c9dc6956d4fd93aead17396ff2442e40ab04fa5b4b3451f3a3ea4c90a006edb976eac0e4b0788aa1ba796ac8eeec54411aece22e5b4b6bdc6a83892193bd4b1ae9a6a29cde0b85993f1e5df2678",
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const json = await response.json();
  if (json.errors) {
    throw new Error(json.errors.map((e) => e.message).join(', '));
  }

  return json.data.upload.data;
};


export const createCafe = async (data) => {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      "authorization": "Bearer 9e613c7a1e49c0ab08acd3971f4fc7a21ed790a9121694770bc238750e0de7e20a152dfafa5516b2b28e0009e2732ada7aa08c9dc6956d4fd93aead17396ff2442e40ab04fa5b4b3451f3a3ea4c90a006edb976eac0e4b0788aa1ba796ac8eeec54411aece22e5b4b6bdc6a83892193bd4b1ae9a6a29cde0b85993f1e5df2678",
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation CreateCafe($name: String!, $Variant: ENUM_CAFE_VARIANT!, $photo: ID!, $competitor: [ComponentCompetitorBrandInput]!, $people: [ComponentPeopleCafesInput]!, $location: JSON!) {
          createCafe(data: { name: $name, Variant: $Variant, photo: $photo, competitor: $competitor, people: $people, location: $location }) {
            data {
              attributes {
                name
                Variant
                photo {
                  data {
                    id
                  }
                }
                competitor {
                  name
                  Expectation
                }
                people {
                  name
                  Role
                  mobile_number
                }
                location
              }
            }
          }
        }
      `,
      variables: data,
    }),
  });

  if (!response.ok) {
    const errorResponse = await response.text();
    console.error('Response error:', errorResponse);
    throw new Error('Network response was not ok');
  }

  const responseData = await response.json();
  if (responseData.errors) {
    console.error('GraphQL errors:', responseData.errors);
    throw new Error('GraphQL query error');
  }
  
  return responseData.data;
};
