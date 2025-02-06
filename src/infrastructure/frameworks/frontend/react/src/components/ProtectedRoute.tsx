import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { authService } from "../services/authService";
import { isAdminFromToken } from "../utils/tokenUtils";
import { ProtectedRouteProps } from "../types/protectedRoutesProps";
import Loading from "./Loading";


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiresAdmin = false }) => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null >(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isCompanyAdminRole = isAdminFromToken();

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await authService.isAuthenticated();
      setIsAuthenticated(authenticated);
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  if (isLoading) {
    return <Loading/>;
  }

  if (isAuthenticated !== null && isAuthenticated === false) {
    return <Navigate to="/" />;
  }
  
  if (requiresAdmin && isCompanyAdminRole !== requiresAdmin) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
