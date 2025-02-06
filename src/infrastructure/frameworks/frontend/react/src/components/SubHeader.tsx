import React from 'react';
import "./SubHeader.css";
import { FaSignOutAlt } from 'react-icons/fa';
import { authService } from '../services/authService';

const SubHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="sub-header-container">
      <h1 className="sub-header">{title}</h1>
      <button onClick={authService.logout} className="logout-button">
        <FaSignOutAlt className="logout-icon" />
      </button>
    </div>
  );
};

export default SubHeader;