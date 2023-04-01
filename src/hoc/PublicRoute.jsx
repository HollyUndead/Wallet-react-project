import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/Auth/authSelector';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isLoggedIn = true;

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};
