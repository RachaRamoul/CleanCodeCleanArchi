import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
