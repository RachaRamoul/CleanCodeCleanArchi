import React from 'react';
import "./SubHeader.css";

const SubHeader: React.FC<{ title: string }> = ({ title }) => {
  return <h1 className="sub-header">{title}</h1>;
};

export default SubHeader;