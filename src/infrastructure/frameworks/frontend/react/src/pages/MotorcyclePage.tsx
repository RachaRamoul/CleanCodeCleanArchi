import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { listMotorcycles, addMotorcycle } from '../services/motorcycleService';

const MotorcyclePage: React.FC = () => {
  const [motorcycles, setMotorcycles] = useState<any[]>([]);
  const [newMotorcycle, setNewMotorcycle] = useState({
    modelId: '',
    mileage: 0,
    status: 'AVAILABLE',
    companyId: '',
  });

  useEffect(() => {
    const fetchMotorcycles = async () => {
      try {
        const data = await listMotorcycles();
        setMotorcycles(data);
      } catch (error) {
        console.error('Error fetching motorcycles:', error);
      }
    };
    fetchMotorcycles();
  }, []);

  const handleAddMotorcycle = async () => {
    try {
      await addMotorcycle(newMotorcycle);
      const updatedMotorcycles = await listMotorcycles();
      setMotorcycles(updatedMotorcycles);
      setNewMotorcycle({ modelId: '', mileage: 0, status: 'AVAILABLE', companyId: '' });
    } catch (error) {
      console.error('Error adding motorcycle:', error);
    }
  };

  return (
    <div className="motorcycle-page">
      <Header />
      <main>
        <h1>Gestion des motos</h1>

        <table>
          <thead>
            <tr>
              <th>Modèle</th>
              <th>Kilométrage</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {motorcycles.map((moto) => (
              <tr key={moto.id}>
                <td>{moto.modelId}</td>
                <td>{moto.mileage} km</td>
                <td>{moto.status}</td>
                <td>
                  <button onClick={() => alert(`Détails pour ${moto.modelId}`)}>Détails</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="add-motorcycle-form">
          <h2>Ajouter une nouvelle moto</h2>
          <input
            type="text"
            placeholder="Modèle"
            value={newMotorcycle.modelId}
            onChange={(e) => setNewMotorcycle({ ...newMotorcycle, modelId: e.target.value })}
          />
          <input
            type="number"
            placeholder="Kilométrage"
            value={newMotorcycle.mileage}
            onChange={(e) => setNewMotorcycle({ ...newMotorcycle, mileage: parseInt(e.target.value, 10) })}
          />
          <input
            type="text"
            placeholder="Statut"
            value={newMotorcycle.status}
            onChange={(e) => setNewMotorcycle({ ...newMotorcycle, status: e.target.value })}
          />
          <input
            type="text"
            placeholder="ID de la compagnie"
            value={newMotorcycle.companyId}
            onChange={(e) => setNewMotorcycle({ ...newMotorcycle, companyId: e.target.value })}
          />
          <button onClick={handleAddMotorcycle}>Ajouter</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MotorcyclePage;
