import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

interface CardProps {
    navigateTo: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
    imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ navigateTo, title, description, icon, imageUrl }) => {
  return (
    <Link to={navigateTo} className="card" style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}>
      <div className="card-overlay">
        {icon && <span className="card-icon">{icon}</span>}
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
