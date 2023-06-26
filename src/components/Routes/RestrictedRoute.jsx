import { Navigate } from 'react-router-dom';
const { useSelector } = require('react-redux');
const { getIsLoggedIn } = require('redux/auth/selectors');

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return <> {!isLoggedIn ? Component : <Navigate to={redirectTo} />}</>;
};

export default RestrictedRoute;
