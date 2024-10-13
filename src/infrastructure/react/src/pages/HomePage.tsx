import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Erreur:', error));
  }, []);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map((user: any) => (
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
