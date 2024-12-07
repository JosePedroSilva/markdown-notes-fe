import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div>
      Public layout
      <Outlet />
    </div>
  );
};

export default PublicLayout;