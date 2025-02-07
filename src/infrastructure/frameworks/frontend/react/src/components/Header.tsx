import React, { useEffect, useState } from 'react';
import './Header.css'; 
import triumphLogo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { authService } from '../services/authService';

const Header: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const connectedUser = await authService.isAuthenticated();
          setIsAuthenticated(connectedUser);
        } catch (error) {
          console.error('Erreur lors de la vérification de l\'authentification :', error);
        }
      };
  
      checkAuth();
    }, []);

  return (
    <header className="header">
      <Link to={isAuthenticated ? "/dashboard" : ""}>
        <img src={triumphLogo} alt="Triumph Logo" className="header-logo" />
      </Link>
    </header>
  );
};

export default Header;
