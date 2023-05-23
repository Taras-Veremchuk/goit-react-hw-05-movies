import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Header>
      </Container>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default SharedLayout;
