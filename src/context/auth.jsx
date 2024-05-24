import React, { createContext, useState, useEffect } from 'react';
import { setToken } from '../apis/graphql-client';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setTokenState] = useState(null);

  useEffect(() => {
    // Retrieve token from local storage or any other secure place
    const savedToken = localStorage.getItem('authToken');
    setTokenState(savedToken);
    setToken(savedToken); // Set token in the GraphQL client
  }, []);

  const updateToken = (newToken) => {
    setTokenState(newToken);
    setToken(newToken);
    localStorage.setItem('authToken', newToken); // Persist the token if needed
  };

  return (
    <AuthContext.Provider value={{ token, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};
