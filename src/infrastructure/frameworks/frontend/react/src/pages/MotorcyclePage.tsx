import React, { useState, useEffect } from 'react';
import SubHeader from '../components/SubHeader';
import { motorcycleService } from '../services/motorcycleService';
import { motorcycleModelService, MotorcycleModel } from '../services/motorcycleModelService';
import { Motorcycle } from '../../../../../../domain/entities/motorcycle.entity';
import "./MotorcyclePage.css";

const MotorcyclePage: React.FC = () => {
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);
  const [motorcycleModels, setMotorcycleModels] = useState<MotorcycleModel[]>([]);
  const [newMotorcycle, setNewMotorcycle] = useState({
    modelId: '',
    mileage: 0,
    status: 'AVAILABLE' as Motorcycle['status'],
    companyId: '',
  });

  const [editMotorcycle, setEditMotorcycle] = useState<{ id: string; mileage: number; status: Motorcycle['status'] } | null>(null);

  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loadingMotorcycles, setLoadingMotorcycles] = useState<boolean>(true);
  const [loadingModels, setLoadingModels] = useState<boolean>(true);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    loadMotorcycles();
    loadMotorcycleModels();
  }, []);

  const loadMotorcycles = async () => {
    setLoadingMotorcycles(true);
    try {
      const data = await motorcycleService.listMotorcycles();
      setMotorcycles(data);
      setErrorMessage(null);
    } catch (error) {
      console.error('Error fetching motorcycles:', error);
      setErrorMessage('Erreur lors du chargement des motos.');
    } finally {
      setLoadingMotorcycles(false);
    }
  };

  const loadMotorcycleModels = async () => {
    setLoadingModels(true);
    try {
      const data = await motorcycleModelService.listMotorcycleModels();
      setMotorcycleModels(data);
    } catch (error) {
      console.error('Error fetching motorcycle models:', error);
      setErrorMessage("Erreur lors du chargement des modèles de motos.");
    } finally {
      setLoadingModels(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewMotorcycle({ ...newMotorcycle, [e.target.name]: e.target.value });
  };

  const handleAddMotorcycle = async () => {
    if (!newMotorcycle.modelId || newMotorcycle.mileage < 0 || !newMotorcycle.companyId) {
      setFormError("Tous les champs sont obligatoires et le kilométrage doit être positif.");
      return;
    }

    try {
      await motorcycleService.addMotorcycle(newMotorcycle);
      loadMotorcycles();
      setNewMotorcycle({ modelId: '', mileage: 0, status: 'AVAILABLE', companyId: '' });
      setShowAddForm(false);
      setFormError(null);
    } catch (error) {
      console.error('Error adding motorcycle:', error);
      setFormError("Impossible d'ajouter la moto. Vérifiez les données saisies.");
    }
  };

  const handleEditMotorcycle = async () => {
    if (!editMotorcycle) return;

    try {
      await motorcycleService.updateMotorcycle(editMotorcycle.id, {
        mileage: editMotorcycle.mileage,
        status: editMotorcycle.status,
      });
      loadMotorcycles();
      setShowEditForm(false);
    } catch (error) {
      console.error('Error updating motorcycle:', error);
      setErrorMessage("Erreur lors de la mise à jour de la moto.");
    }
  };

  const handleDeleteMotorcycle = async (id: string) => {  
    if (!window.confirm("Voulez-vous vraiment supprimer cette moto ?")) return;
    
    try {
      await motorcycleService.deleteMotorcycle(id);
      loadMotorcycles();
    } catch (error) {
      console.error("Erreur lors de la suppression de la moto:", error);
      setErrorMessage("Erreur lors de la suppression de la moto.");
    }
  };

  return (
    <div className="motorcycle-page">
      <SubHeader title="Gestion des motos" />
      <main className="main-content">
        <div className="button-container">
          <button className="add" onClick={() => setShowAddForm(true)}>➕ Ajouter une moto</button>
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="table-container">
          {loadingMotorcycles ? (
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
                    <td>{motorcycleModels.find((model) => model.id === moto.modelId)?.name || "Modèle inconnu"}</td>
                    <td>{moto.mileage} km</td>
                    <td>{moto.status}</td>
                    <td>
                      <button className="edit" onClick={() => { setEditMotorcycle({ id: moto.id, mileage: moto.mileage, status: moto.status }); setShowEditForm(true); }}>✏ Modifier</button>
                      <button className="delete" onClick={() => handleDeleteMotorcycle(moto.id)}>🗑 Supprimer</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {showAddForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Ajouter une nouvelle moto</h2>
              {formError && <p className="error-message">{formError}</p>}

              <select name="modelId" value={newMotorcycle.modelId} onChange={handleInputChange}>
                <option value="">Sélectionner un modèle</option>
                {motorcycleModels.map((model) => (
                  <option key={model.id} value={model.id}>{model.name}</option>
                ))}
              </select>

              <input type="number" name="mileage" placeholder="Kilométrage" value={newMotorcycle.mileage} onChange={handleInputChange} />
              
              <input type="text" name="companyId" placeholder="ID de la compagnie" value={newMotorcycle.companyId} onChange={handleInputChange} />

              <button onClick={handleAddMotorcycle}>Ajouter</button>
              <button className="cancel" onClick={() => setShowAddForm(false)}>Annuler</button>
            </div>
          </div>
        )}

        {showEditForm && editMotorcycle && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Modifier la moto</h2>

              <input type="number" value={editMotorcycle.mileage} onChange={(e) => setEditMotorcycle({ ...editMotorcycle, mileage: parseInt(e.target.value, 10) })} />

              <select value={editMotorcycle.status} onChange={(e) => setEditMotorcycle({ ...editMotorcycle, status: e.target.value as Motorcycle['status'] })}>
                <option value="AVAILABLE">Disponible</option>
                <option value="IN_MAINTENANCE">En maintenance</option>
                <option value="RENTED">Louée</option>
                <option value="DECOMMISSIONED">Hors service</option>
              </select>

              <button onClick={handleEditMotorcycle}>Mettre à jour</button>
              <button className="cancel" onClick={() => setShowEditForm(false)}>Annuler</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MotorcyclePage;