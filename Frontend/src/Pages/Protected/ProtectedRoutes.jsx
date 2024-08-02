import { Navigate, Outlet } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { Suspense } from 'react';

const ProtectedRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext); // Add 'loading' to context
  const { loading, setIsLoading } = useContext(AuthContext);

  useEffect(
    () => {
      setTimeout(setIsLoading(false), 3000);
      setIsLoading(true);
    }
  )

  if (!isAuthenticated) {
    return <Navigate to="/"></Navigate>
  }

  return (
    <Suspense fallback={<div>Loading content...</div>}>
      <Outlet />
    </Suspense>
  );
};

export default ProtectedRoutes;
