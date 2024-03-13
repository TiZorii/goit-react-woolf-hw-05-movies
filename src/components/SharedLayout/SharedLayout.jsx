import { Outlet } from 'react-router-dom';
import { Nav, Wrapper, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <Nav>
          <Wrapper>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
          </Wrapper>
        </Nav>
      </header>
      <Outlet />
    </div>
  );
};
export default SharedLayout;
