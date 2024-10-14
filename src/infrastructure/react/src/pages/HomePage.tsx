import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {API_BASE_URL} from '../../config/api.config';
import {User} from '../../../../domain/entities/user.entity';

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
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
      <h1>Ajouter un utilisateur</h1>
      <Link to="/add-user">
        <button>Ajouter un utilisateur</button>
      </Link>
    </div>
  );
};

export default HomePage;
