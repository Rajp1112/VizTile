import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import API_BASE_URL from './apiConfig';
import ENDPOINTS from './endpoint';
import { set } from 'react-hook-form';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(false);
  const [services, setServices] = useState('');
  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem('token', serverToken);
  };

  const LogoutUser = () => {
    setToken(null);
    setUser(null);
    toast.success('Logout successful');
    localStorage.removeItem('token');
  };

  const isLoggedIn = !!token;

  const userAuthentication = async () => {
    setUserLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}${ENDPOINTS.USER.GET_USER}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: authorizationToken,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUserLoading(false);
        setUser(data);
      } else {
        setUserLoading(false);
        setUser(null);
      }
    } catch (error) {
      setUserLoading(false);
      console.log(error);
      setUser(null);
    } finally {
      setUserLoading(false);
    }
  };

  const getServices = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.SERVICE}`, {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`service error: ${error}`);
    }
  };

  // useEffect(() => {
  //   if (token) {
  //     // userAuthentication();
  //   } else {
  //     setUserLoading(false);
  //   }
  //   // getServices();
  // }, [token]);

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        LogoutUser,
        isLoggedIn,
        user,
        userLoading,
        services,
        authorizationToken,
        reloadUser: userAuthentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return authContextValue;
};
