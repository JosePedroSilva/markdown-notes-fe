import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from './App';
import AuthRoute from './components/AuthRoute';
import Login from './pages/public/Login';
import Dashboard from './pages/private/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <AuthRoute isProtected={false}/>,
        children:[
          {
            path: 'login', element: <Login />
          }
        ]
      },
      {
        element: <AuthRoute isProtected={true}/>,
        children:[
          {
            path: 'dashboard', element: <Dashboard />
          }
        ]
      },
      { path: '*', element: <Navigate to="/login" replace /> },
    ]
  }
])

export default router;