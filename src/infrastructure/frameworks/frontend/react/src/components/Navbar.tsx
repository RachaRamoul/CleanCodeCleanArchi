import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/parts">Pièces détachées</Link>
        </li>
        <li>
          <Link to="/add-part">Ajouter une pièce</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
