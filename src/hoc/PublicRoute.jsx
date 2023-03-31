import { selectIsLoggedIn } from 'components/redux/Auth/authSelector';
import React from 'react';
import { useSelector } from 'react-redux';
// import { useSelector } from '@reduxjs/toolkit';
// import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isLoggedIn = true;

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};
