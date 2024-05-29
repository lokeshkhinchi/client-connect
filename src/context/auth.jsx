import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { removeToken, setToken } from '../apis/graphql-client';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setTokenState] = useState(null);
  const [userInfo, setUserInfo] = useState('');

  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    const savedUserInfo = Cookies.get('userInfo');

    if (savedToken) {
      setTokenState(savedToken);
      setToken(savedToken);
    }

    if (savedUserInfo) {
      setUserInfo(JSON.parse(savedUserInfo));
    }
  }, []);

  const updateToken = (newToken) => {
    setTokenState(newToken);
    setToken(newToken);
    localStorage.setItem('authToken', newToken);
  };

  const updateUserInfo = (user) => {
    setUserInfo(user);
    Cookies.set('userInfo', JSON.stringify(user), { secure: true, sameSite: 'strict' });
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    Cookies.remove('userInfo');
    setTokenState(null);
    setUserInfo('');
    removeToken();
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ token, updateToken, logout, updateUserInfo, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
