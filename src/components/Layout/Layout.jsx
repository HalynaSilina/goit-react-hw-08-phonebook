import AuthNav from 'components/AuthNav/AuthNav';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/selectors';

const Layout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <header>
        <Navigation />
        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
