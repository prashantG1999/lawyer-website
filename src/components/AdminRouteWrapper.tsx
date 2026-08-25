import React from 'react';
import { AuthProvider } from '../context/AuthContext.tsx';

const AdminRouteWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AdminRouteWrapper;
