import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      setIsAuthenticated(true);
      setUserRole(decodedToken.role);
    }
  }, []);

  return { isAuthenticated, userRole };
};
