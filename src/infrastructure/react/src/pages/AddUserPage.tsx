import React, { useState } from 'react';

const AddUserPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('http://localhost:8000/users', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName }),
    });
    setFirstName('');
    setLastName('');
  };

  return (
    <div>
      <h1>Ajouter un utilisateur</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Prénom"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Nom"
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddUserPage;
