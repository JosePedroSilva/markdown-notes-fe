import { Outlet } from 'react-router-dom';
import './PrivateLayout.css'

import SideBar from '../components/SideBar';

const PrivateLayout = () => {
  return (
    <div className="private-layout">
      <div className="sidebar-layout">
        <SideBar />
      </div>
      <div className="content-layout">
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateLayout;