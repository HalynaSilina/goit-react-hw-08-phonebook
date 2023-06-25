import React, { useEffect } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authThunks';

const Home = lazy(() => import('../../pages/Home/Home'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const Register = lazy(() => import('../../pages/Register/Register'));
const Login = lazy(() => import('../../pages/Login/Login'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {dispatch(fetchCurrentUser())}, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
