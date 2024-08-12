import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { Suspense } from 'react';

const MainPages = () => {
  const { isAuthenticated } = useContext(AuthContext); // Add 'loading' to context

  if (!isAuthenticated) {
    return <Navigate to="/"></Navigate>
  }

  return (
    <Suspense fallback={<div>Loading content...</div>}>
      <Outlet />
    </Suspense>
  );
};

export default MainPages;
