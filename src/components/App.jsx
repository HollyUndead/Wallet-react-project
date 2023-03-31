import { Routes, Route, Navigate } from 'react-router-dom';
import { SummaryPage } from 'pages/SummaryPage';
import { LoginPage } from 'pages/LoginPage';
import { DashboardPage } from 'pages/DashboardPage';
import { Layout } from './Layout/Layout';
import { RegistrationPage } from 'pages/RegistrationPage';
import { CurrencyPage } from 'pages/CurrencyPage';
import { PrivateRoute } from '../hoc/PrivateRoute';
import { PublicRoute } from '../hoc/PublicRoute';
import { ModalMain } from './ModalAddTransactions/ModalMain/ModalMain';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="/diagram" element={<SummaryPage />} />
          <Route path="/currency" element={<CurrencyPage />} />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ModalMain />
    </div>
  );
};
