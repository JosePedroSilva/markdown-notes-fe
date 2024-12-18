import { createBrowserRouter, Navigate } from 'react-router-dom';

import AuthRoute from './components/AuthRoute';

import AppInitializer from './components/AppInitializer';

import PublicLayout from './layouts/PublicLayout';
import PrivateLayout from './layouts/PrivateLayout';

import Login from './pages/public/Login';
import SignUp from './pages/public/SignUp';

import Dashboard from './pages/private/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        element: <AuthRoute isProtected={false} />,
        children: [
          { path: 'login', element: <Login /> },
          { path: 'signup', element: <SignUp /> },
        ],
      },
      { index: true, element: <Navigate to="/login" replace /> },
    ],
  },
  {
    path: '/',
    element: <AuthRoute isProtected={true} />, // First, ensure user is authenticated
    children: [
      {
        element: <AppInitializer />,
        children: [
          {
            element: <PrivateLayout />,
            children: [
              { path: 'dashboard', element: <Dashboard /> },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;