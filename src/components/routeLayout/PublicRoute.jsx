import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const PublicRoute = () => {
  const navigate = useNavigate();
  //   const { pathname } = useLocation();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) navigate('/signin');
  }, [token, navigate]);

  return <>{token ? <Outlet /> : <Navigate to="/signin" replace />}</>;
};

export default PublicRoute;
