import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from '../hoc/PrivateRoute';
import { PublicRoute } from '../hoc/PublicRoute';
import { ModalMain } from './ModalAddTransactions/ModalMain/ModalMain';
import { fetchCurrentUser } from 'redux/operations';
import { Loader } from './Loader/Loader';

const SummaryPage = lazy(() => import('../pages/SummaryPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const CurrencyPage = lazy(() => import('../pages/CurrencyPage'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </div>
  );
};
