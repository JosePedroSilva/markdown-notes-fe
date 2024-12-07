import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthRoute = ({isProtected = false}) => {
  const token = localStorage.getItem('token');

  if (isProtected && !token) {
    return <Navigate to="/login" replace/>;
  }

  if (!isProtected && token) {
    return <Navigate to="/" replace/>;
  }

  return <Outlet />;
};
AuthRoute.propTypes = {
  isProtected: PropTypes.bool,
};

export default AuthRoute;
