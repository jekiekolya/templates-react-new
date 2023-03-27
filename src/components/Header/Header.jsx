import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <h2>Header</h2>
      <Outlet />
    </>
  );
};

export default Header;
