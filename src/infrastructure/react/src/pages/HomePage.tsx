import React, { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
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
    </div>
  );
};

export default HomePage;
