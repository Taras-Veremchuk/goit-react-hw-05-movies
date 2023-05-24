import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main, Header, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Header>
      <Main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
export default SharedLayout;
