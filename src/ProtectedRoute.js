import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './context/auth';

const ProtectedRoute = () => {
  const { token } = useContext(AuthContext);
  const isAuthenticated = token || localStorage.getItem('authToken');

  console.log({ isAuthenticated });
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
