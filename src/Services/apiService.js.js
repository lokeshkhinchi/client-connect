import axios from 'axios';

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
  try {
    const response = await apiService.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Example function to post data
export const postData = async (endpoint, data) => {
  try {
    const response = await apiService.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Example function to handle login
export const login = async (credentials) => {
  try {
    const response = await apiService.post('/login', credentials);
    const { token } = response.data;
    
    // Set token in headers
    setAuthToken(token);

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Example function to handle logout
export const logout = () => {
  // Clear token from headers
  setAuthToken(null);
};