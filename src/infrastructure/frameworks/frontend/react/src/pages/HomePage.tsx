import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home">
      <h1>Gestion de stock des pièces détachées</h1>
      <nav className="home-links">
        <Link to="/parts">Gérer les pièces détachées</Link>
        <Link to="/add-part">Ajouter une pièce détachée</Link>
      </nav>
    </div>
  );
};

export default HomePage;
