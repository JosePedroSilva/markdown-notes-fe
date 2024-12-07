import { Outlet } from 'react-router-dom';

const PrivateLayout = () => {
  return (
    <div>
      Private layout
      <Outlet />
    </div>
  );
};

export default PrivateLayout;