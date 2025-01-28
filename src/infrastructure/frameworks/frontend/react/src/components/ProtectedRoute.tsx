import React from "react";
import { Navigate } from "react-router-dom";
import { authService } from "../services/authService";
import { isAdminFromToken } from "../utils/tokenUtils";
import { ProtectedRouteProps } from "../types/protectedRoutesProps";


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiresAdmin = false }) => {
  
  const isCompanyAdminRole = isAdminFromToken();

  if (!authService.isAuthenticated()) {
    return <Navigate to="/" />;
  }
  
  if (requiresAdmin && isCompanyAdminRole !== requiresAdmin) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
