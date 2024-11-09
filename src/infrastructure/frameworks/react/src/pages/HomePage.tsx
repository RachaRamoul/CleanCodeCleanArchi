import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {API_BASE_URL} from '../../config/api.config';
import {User} from '../../../../../domain/entities/user.entity'


const HomePage: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}users`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Erreur:', error));
  }, []);

  return (
    <div>
      <h1>S'inscrire</h1>
      <Link to="/signup">
        <button>Ajouter un utilisateur</button>
      </Link>
    </div>
  );
};

export default HomePage;
