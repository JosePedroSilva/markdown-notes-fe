import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import PropTypes from 'prop-types';

interface AuthRouteProps {
  isProtected?: boolean;
}

const AuthRoute: React.FC<AuthRouteProps> = ({isProtected = false}) => {
  const authContext = useContext(AuthContext);
  const {isAuthenticated} = authContext;

  if (!authContext) {
    throw new Error('AuthContext is not defined');
  }

  if (isProtected && !isAuthenticated) {
    return <Navigate to="/login" replace/>;
  }

  if (!isProtected && isAuthenticated) {
    return <Navigate to="/dashboard" replace/>;
  }

  return <Outlet />;
};
AuthRoute.propTypes = {
  isProtected: PropTypes.bool,
};

export default AuthRoute;
