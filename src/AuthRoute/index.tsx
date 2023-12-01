import React from 'react';
import { Navigate } from 'react-router-dom';

interface AuthRouteProps {
  isAuthenticated: boolean;
  children: JSX.Element;
}

const AuthRoute = ({
  isAuthenticated,
  children,
}: AuthRouteProps): JSX.Element | null => {
  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default AuthRoute;
