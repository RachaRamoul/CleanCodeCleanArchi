import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {motorcycleService} from '../services/motorcycleService';
import { Motorcycle } from '../../../../../../domain/entities/motorcycle.entity';
import "./MotorcyclePage.css";


const MotorcyclePage: React.FC = () => {
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);
  const [newMotorcycle, setNewMotorcycle] = useState<Partial<Motorcycle>>({
    modelId: '',
    mileage: 0,
    status: 'AVAILABLE',
    companyId: '',
  });
  const [selectedMotorcycle, setSelectedMotorcycle] = useState<Motorcycle | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchMotorcycles();
  }, []);

  const fetchMotorcycles = async () => {
    setLoading(true);
    try {
      const data = await motorcycleService.listMotorcycles();
      setMotorcycles(data);
      setErrorMessage(null);
    } catch (error) {
      console.error('Error fetching motorcycles:', error);
      setErrorMessage('Erreur lors du chargement des motos.');
    }
    setLoading(false);
  };

  const handleAddMotorcycle = async () => {
    try {
      await motorcycleService.addMotorcycle(newMotorcycle);
      fetchMotorcycles();
      setNewMotorcycle({ modelId: '', mileage: 0, status: 'AVAILABLE', companyId: '' });
    } catch (error) {
      console.error('Error adding motorcycle:', error);
      setErrorMessage("Impossible d'ajouter la moto.");
    }
  };

  const handleDeleteMotorcycle = async (id: string) => {  
    if (window.confirm("Voulez-vous vraiment supprimer cette moto ?")) {
      try {
        await motorcycleService.deleteMotorcycle(id);
        await fetchMotorcycles();
      } catch (error) {
        console.error("Erreur lors de la suppression de la moto:", error);
      }
    }
  };
  
  const handleViewDetails = async (id: number) => {
    try {
      const data = await motorcycleService.getMotorcycleById(id);
      setSelectedMotorcycle(data);
    } catch (error) {
      console.error('Error fetching motorcycle details:', error);
      setErrorMessage("Impossible d'afficher les détails.");
    }
  };

  return (
    <div className="motorcycle-page">
      <Header />
      <main>
        <h1>Gestion des motos</h1>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Tableau des motos */}
        {loading ? (
          <p>Chargement des motos...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Modèle</th>
                <th>Kilométrage</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {motorcycles.map((moto) => (
                <tr key={moto.id}>
                  <td>{moto.id}</td>
                  <td>{moto.modelId}</td>
                  <td>{moto.mileage} km</td>
                  <td>{moto.status}</td>
                  <td>
                      <button onClick={() => handleViewDetails(Number(moto.id))}>Détails</button>
                      <button onClick={() => handleDeleteMotorcycle(moto.id)}>🗑 Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Formulaire d'ajout de moto */}
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
          <select
            value={newMotorcycle.status}
            onChange={(e) => setNewMotorcycle({ ...newMotorcycle, status: e.target.value as Motorcycle['status'] })}
          >
            <option value="AVAILABLE">Disponible</option>
            <option value="IN_MAINTENANCE">En maintenance</option>
            <option value="RENTED">Louée</option>
            <option value="DECOMMISSIONED">Hors service</option>
          </select>
          <input
            type="text"
            placeholder="ID de la compagnie"
            value={newMotorcycle.companyId}
            onChange={(e) => setNewMotorcycle({ ...newMotorcycle, companyId: e.target.value })}
          />
          <button onClick={handleAddMotorcycle}>Ajouter</button>
        </div>

        {/* Affichage des détails d'une moto */}
        {selectedMotorcycle && (
          <div className="motorcycle-details">
            <h2>Détails de la moto</h2>
            <p><strong>ID :</strong> {selectedMotorcycle.id}</p>
            <p><strong>Modèle :</strong> {selectedMotorcycle.modelId}</p>
            <p><strong>Kilométrage :</strong> {selectedMotorcycle.mileage} km</p>
            <p><strong>Statut :</strong> {selectedMotorcycle.status}</p>
            <p><strong>Compagnie :</strong> {selectedMotorcycle.companyId}</p>
            <button onClick={() => setSelectedMotorcycle(null)}>Fermer</button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default MotorcyclePage;