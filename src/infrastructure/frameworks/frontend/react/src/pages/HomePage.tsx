import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config/api.config';
import { Motorcycle } from '../../../../../../domain/entities/motorcycle.entity';

const HomePage: React.FC = () => {
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]); // Utilisation du type existant

  useEffect(() => {
    fetch(`${API_BASE_URL}motorcycles`)
      .then((response) => response.json())
      .then((data) => setMotorcycles(data))
      .catch((error) => console.error('Erreur:', error));
  }, []);

  return (
    <div>
      <h1>Liste des motos</h1>
      <ul>
        {motorcycles.map((motorcycle) => (
          <li key={motorcycle.motorcycleId}>
            {motorcycle.modelId} - {motorcycle.status}
          </li>
        ))}
      </ul>
      <h1>Ajouter une moto</h1>
      <Link to="/add-motorcycle">
        <button>Ajouter une moto</button>
      </Link>
    </div>
  );
};

export default HomePage;
