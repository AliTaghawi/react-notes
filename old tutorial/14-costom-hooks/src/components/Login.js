import React from 'react';
import { useTitle } from '../hooks/costomHooks';

const Login = () => {
  useTitle('login page')
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
};

export default Login;