import { createContext, useState, useEffect, ReactNode } from 'react';
import { loginUser, registerUser } from '../api/AuthApi';

interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  register: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const defaultAuthContext: AuthContextType = {
  token: null,
  isAuthenticated: false,
  register: () => {},
  login: () => {},
  logout: () => {}
}

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    //TODO: Add check if token is valid
    const storageToken = localStorage.getItem('token');
    if (storageToken) {
      setToken(storageToken);
    }
  }, []);

  const register = async (email: string, password: string) => {
    const data = await registerUser(email, password);

    if (!data.ok) {
      if (data.status === 409) {
        throw new Error('User already exists');
      }

      throw new Error('Error registering user' + data.status);
    }

    const jsonData = await data.json();

    localStorage.setItem('token', jsonData.token);
  };

  const login = async (email: string, password: string) => {
    const data = await loginUser(email, password);

    if (!data.ok) {
      if (data.status === 401) {
        throw new Error('Invalid credentials');
      }

      throw new Error('Error logging in user' + data.status);
    }

    localStorage.setItem('token', data.token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return(
    <AuthContext.Provider value={{ token, isAuthenticated: !!token, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )

};