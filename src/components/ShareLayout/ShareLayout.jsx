import { NavLink, Outlet } from 'react-router-dom';
import { Header } from './ShareLayout.styled';

const Sharelayout = () => {
  return (
    <>
      sharelayout
      <Header>
        <nav>
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/movies"> Movie</NavLink>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Sharelayout;
