import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const token = useSelector((state) => state.token);
    if (!token) {
      return <Navigate to="/" />;
    } else {
      return <WrappedComponent {...props} />;
    }
  };

  return AuthenticatedComponent;
};

export default RequireAuth;
