import React, { useState, useEffect } from 'react';
import SubHeader from '../components/SubHeader';
import { motorcycleModelService } from '../services/motorcycleModelService';
import { MotorcycleModel } from '../../../../../../domain/entities/motorcycle-model.entity';
import "./MotorcyclePage.css";
import { PartialModel } from '../types/modelPartial';

const MotorcycleModelPage: React.FC = () => {
  const [motorcycleModels, setMotorcycleModels] = useState<MotorcycleModel[]>([]);
  const [newModel, setNewModel] = useState<PartialModel>({ name: '', maintenanceFrequencyInKilometers: 0 });
  const [showAddForm, setShowAddForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loadingModels, setLoadingModels] = useState<boolean>(true);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    loadMotorcycleModels();
  }, []);

  const loadMotorcycleModels = async () => {
    setLoadingModels(true);
    try {
      const data = await motorcycleModelService.listMotorcycleModels();
      setMotorcycleModels(data);
      setErrorMessage(null);
    } catch (error) {
      console.error('Error fetching motorcycle models:', error);
      setErrorMessage("Erreur lors du chargement des modèles de motos.");
    } finally {
      setLoadingModels(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewModel({ ...newModel, [e.target.name]: e.target.type === 'number' ? Number(e.target.value) : e.target.value });
  };

  const handleAddModel = async () => {
    if (!newModel.name || (newModel.maintenanceFrequencyInKilometers && newModel.maintenanceFrequencyInKilometers <= 0)) {
      setFormError("Tous les champs sont obligatoires et la fréquence de maintenance doit être positive.");
      return;
    }
    try {
      await motorcycleModelService.addMotorcycleModel(newModel);
      loadMotorcycleModels();
      setNewModel({ name: '', maintenanceFrequencyInKilometers: 0 });
      setShowAddForm(false);
      setFormError(null);
    } catch (error) {
      console.error('Error adding motorcycle model:', error);
      setFormError("Impossible d'ajouter le modèle.");
    }
  };

  const handleDeleteModel = async (id: string) => {
    if (!window.confirm("Voulez-vous vraiment supprimer ce modèle ?")) return;
    try {
      await motorcycleModelService.deleteMotorcycleModel(id);
      loadMotorcycleModels();
    } catch (error) {
      console.error("Erreur lors de la suppression du modèle:", error);
      setErrorMessage("Erreur lors de la suppression du modèle.");
    }
  };

  return (
    <div className="motorcycle-page">
      <SubHeader title="Gestion des modèles de motos" />
      <main className="main-content">
        <div className="button-container">
          <button className="add" onClick={() => setShowAddForm(true)}>➕ Ajouter un modèle</button>
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="table-container">
          {loadingModels ? (
            <p>Chargement des modèles...</p>
          ) : (
            <table className="wider-table">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Fréquence de maintenance (km)</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {motorcycleModels.map((model) => (
                  <tr key={model.id}>
                    <td>{model.name.value}</td>
                    <td>{model.maintenanceFrequencyInKilometers} km</td>
                    <td>
                      <button className="delete" onClick={() => handleDeleteModel(model.id)}>🗑 Supprimer</button>
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
              <h2>Ajouter un modèle</h2>
              {formError && <p className="error-message">{formError}</p>}
              <input type="text" name="name" placeholder="Nom du modèle" value={newModel.name} onChange={handleInputChange} />
              <input type="number" name="maintenanceFrequencyInKilometers" placeholder="Fréquence de maintenance (km)" value={newModel.maintenanceFrequencyInKilometers} onChange={handleInputChange} />
              <button onClick={handleAddModel}>Ajouter</button>
              <button className="cancel" onClick={() => setShowAddForm(false)}>Annuler</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MotorcycleModelPage;