import React from 'react';
import './Header.css'; 
import triumphLogo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/dashboard">
        <img src={triumphLogo} alt="Triumph Logo" className="header-logo" />
      </Link>
    </header>
  );
};

export default Header;
