import { useEffect, useState } from 'react';
import { Outlet, useNavigate} from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useIntialDataStore from '../store/useIntialDataStore';
import { fetchTree } from '../api/TreeApi';

const AppInitializer = () => {
  const {isAuthenticated, token} = useAuth();
  const navigate = useNavigate();
  const setTree = useIntialDataStore(state => state.setTree);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if(!isAuthenticated || !token){
      navigate('/login');
      return;
    }

    const fetchInitialData = async () => {
      try{
        const response = await fetchTree(token);

        const data = await response.json();

        setTree(data);

        setIsLoading(false);

      } catch(e) {
        setError(e instanceof Error ? e.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();

  }, [isAuthenticated, token, navigate]);

  if(isLoading){
    return <div>Loading...</div>;
  }

  if(error){
    return <div>Error: {error} <button onClick={() => window.location.reload()}>Retry</button></div>;
  }

  return <Outlet />;
};

export default AppInitializer;