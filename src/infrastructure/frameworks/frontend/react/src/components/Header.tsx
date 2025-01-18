import React from 'react';
import './Header.css'; 
import triumphLogo from '../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={triumphLogo} alt="Triumph Logo" className="header-logo" />
    </header>
  );
};

export default Header;
