import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const PublicRoute = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) navigate('/');
  }, [token, navigate]);

  return <>{token && <Outlet />}</>;
};

export default PublicRoute;
