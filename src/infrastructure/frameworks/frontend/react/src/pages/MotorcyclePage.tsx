import React, { useState, useEffect } from 'react';
import SubHeader from '../components/SubHeader';
import { motorcycleService } from '../services/motorcycleService';
import { motorcycleModelService, MotorcycleModel } from '../services/motorcycleModelService';
import { Motorcycle } from '../../../../../../domain/entities/motorcycle.entity';
import "./MotorcyclePage.css";

const MotorcyclePage: React.FC = () => {
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);
  const [motorcycleModels, setMotorcycleModels] = useState<MotorcycleModel[]>([]);
  const [newMotorcycle, setNewMotorcycle] = useState<{
    modelId: string;
    mileage: number;
    status: Motorcycle['status'];
    companyId: string;
  }>({
    modelId: '',
    mileage: 0,
    status: 'AVAILABLE',
    companyId: '',
  });

  const [showForm, setShowForm] = useState(false);
  const [selectedMotorcycle, setSelectedMotorcycle] = useState<Motorcycle | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchMotorcycles();
    fetchMotorcycleModels();
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

  const fetchMotorcycleModels = async () => {
    try {
      const data = await motorcycleModelService.listMotorcycleModels();
      setMotorcycleModels(data);
    } catch (error) {
      console.error('Error fetching motorcycle models:', error);
      setErrorMessage("Erreur lors du chargement des modèles de motos.");
    }
  };

  const handleAddMotorcycle = async () => {
    try {
      await motorcycleService.addMotorcycle({
        ...newMotorcycle,
        mileage: newMotorcycle.mileage,
      });
      fetchMotorcycles();
      setNewMotorcycle({ modelId: '', mileage: 0, status: 'AVAILABLE', companyId: '' });
      setShowForm(false);
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

  const handleViewDetails = async (id: string) => {
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
      <SubHeader title="Gestion des motos" />
      <main className="main-content">
        <div className="button-container">
          <button className="add" onClick={() => setShowForm(true)}>➕ Ajouter une moto</button>
        </div>

        <div className="table-container">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {loading ? (
            <p>Chargement des motos...</p>
          ) : (
            <table className="wider-table">
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
                    <td>
                        {motorcycleModels.find((model) => model.id === moto.modelId)?.name || "Modèle inconnu"}
                    </td>
                    <td>{moto.mileage} km</td>
                    <td>{moto.status}</td>
                    <td>
                      <button className="details" onClick={() => handleViewDetails(moto.id)}>Détails</button>
                      <button className="delete" onClick={() => handleDeleteMotorcycle(moto.id)}>🗑 Supprimer</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {showForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Ajouter une nouvelle moto</h2>
              <select
                value={newMotorcycle.modelId}
                onChange={(e) => setNewMotorcycle({ ...newMotorcycle, modelId: e.target.value })}
              >
                <option value="">Sélectionner un modèle</option>
                {motorcycleModels.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>
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
              <button className="cancel" onClick={() => setShowForm(false)}>Annuler</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MotorcyclePage;