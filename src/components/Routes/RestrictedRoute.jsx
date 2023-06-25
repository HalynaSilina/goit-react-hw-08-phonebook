import { Navigate } from 'react-router-dom';
const { useSelector } = require('react-redux');
const { getIsLoggedIn } = require('redux/auth/selectors');

const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return <> {!isLoggedIn ? children : <Navigate to="/" />}</>;
};

export default RestrictedRoute;
