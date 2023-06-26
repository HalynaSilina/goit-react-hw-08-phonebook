import { Navigate } from 'react-router-dom';

const { useSelector } = require('react-redux');
const { getIsLoggedIn, getIsRefreshed } = require('redux/auth/selectors');

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshed);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : Component}</>;
};
