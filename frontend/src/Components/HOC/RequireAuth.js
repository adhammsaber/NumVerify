import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const RequireAuth = ({ component: Component, token }) => {
  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
  }, [token, history]);

  return <>{token ? <Component /> : null}</>;
};

export default RequireAuth;
