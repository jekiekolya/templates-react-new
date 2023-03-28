import { Box } from 'components/Box';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <h2>Header</h2>
      <Outlet />
      <Box color="red">box</Box>
    </>
  );
};

export default Header;
