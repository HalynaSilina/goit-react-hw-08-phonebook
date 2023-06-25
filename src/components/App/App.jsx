import React, { useEffect } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authThunks';
import PrivateRoute from 'components/Routes/PrivateRoute';
import RestrictedRoute from 'components/Routes/RestrictedRoute';
import { getIsRefreshed } from 'redux/auth/selectors';
import Loader from 'components/Loader/Loader';

const Home = lazy(() => import('../../pages/Home/Home'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const Register = lazy(() => import('../../pages/Register/Register'));
const Login = lazy(() => import('../../pages/Login/Login'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshed());

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute>
              <Register />
            </RestrictedRoute>
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute>
              <Login />
            </RestrictedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
