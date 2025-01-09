import React, { useState } from 'react';
import { API_BASE_URL } from '../../config/api.config';

const AddMotorcyclePage: React.FC = () => {
  const [modelId, setModelId] = useState('');
  const [mileage, setMileage] = useState(0);
  const [status, setStatus] = useState<'AVAILABLE' | 'IN_MAINTENANCE' | 'RENTED' | 'DECOMMISSIONED'>('AVAILABLE');
  const [companyId, setCompanyId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`${API_BASE_URL}motorcycles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ modelId, mileage, status, companyId }),
    });
    setModelId('');
    setMileage(0);
    setStatus('AVAILABLE');
    setCompanyId('');
  };

  return (
    <div>
      <h1>Ajouter une moto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={modelId}
          onChange={(e) => setModelId(e.target.value)}
          placeholder="Modèle"
        />
        <input
          type="number"
          value={mileage}
          onChange={(e) => setMileage(Number(e.target.value))}
          placeholder="Kilométrage"
        />
        <select value={status} onChange={(e) => setStatus(e.target.value as 'AVAILABLE' | 'IN_MAINTENANCE' | 'RENTED' | 'DECOMMISSIONED')}>
          <option value="AVAILABLE">Disponible</option>
          <option value="IN_MAINTENANCE">En maintenance</option>
          <option value="RENTED">Loué</option>
          <option value="DECOMMISSIONED">Hors service</option>
        </select>
        <input
          type="text"
          value={companyId}
          onChange={(e) => setCompanyId(e.target.value)}
          placeholder="ID de l'entreprise"
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddMotorcyclePage;
