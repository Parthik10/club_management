import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Custom hook to get auth status and user role

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated, userRole } = useAuth();

  return (
    <Route
      {...rest}
      element={
        isAuthenticated && userRole === 'admin' ? (
          <Component />
        ) : (
          <Navigate to="/" />
        )
      }
    />
  );
};

export default ProtectedRoute;
