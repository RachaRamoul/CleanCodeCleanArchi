import React, { useState, useEffect } from 'react';
import SubHeader from '../components/SubHeader';
import { motorcyclePartService } from '../services/motorcyclePartService';
import { MotorcyclePart } from '../../../../../../domain/entities/motorcycle-part.entity';
import "./MotorcyclePage.css";

const MotorcyclePartsPage: React.FC = () => {
  const [parts, setParts] = useState<MotorcyclePart[]>([]);
  const [newPart, setNewPart] = useState<Partial<MotorcyclePart>>({
    name: '',
    description: '',
    stockQuantity: 0,
    cost: 0,
    lowStockAlert: 0,
  });
  const [showForm, setShowForm] = useState(false);
  const [selectedPart, setSelectedPart] = useState<MotorcyclePart | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchParts();
  }, []);

  const fetchParts = async () => {
    setLoading(true);
    try {
      const data = await motorcyclePartService.listMotorcycleParts();
      setParts(data);
      setErrorMessage(null);
    } catch (error) {
      console.error('Error fetching parts:', error);
      setErrorMessage('Erreur lors du chargement des pièces.');
    }
    setLoading(false);
  };

  const handleAddPart = async () => {
    try {
      await motorcyclePartService.addMotorcyclePart(newPart);
      fetchParts();
      setNewPart({ name: '', description: '', stockQuantity: 0, cost: 0, lowStockAlert: 0 });
      setShowForm(false);
    } catch (error) {
      console.error('Error adding part:', error);
      setErrorMessage("Impossible d'ajouter la pièce.");
    }
  };

  const handleDeletePart = async (id: string) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette pièce ?")) {
      try {
        await motorcyclePartService.deleteMotorcyclePart(id);
        fetchParts();
      } catch (error) {
        console.error("Erreur lors de la suppression de la pièce:", error);
      }
    }
  };

  return (
    <div className="motorcycle-page">
      <SubHeader title="Gestion des Pièces" />
      <main className="main-content">
        <div className="button-container">
          <button className="add" onClick={() => setShowForm(true)}>➕ Ajouter une pièce</button>
        </div>
        <div className="table-container">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {loading ? (
            <p>Chargement des pièces...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nom</th>
                  <th>Description</th>
                  <th>Stock</th>
                  <th>Prix</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {parts.map((part) => (
                  <tr key={part.id}>
                    <td>{part.id}</td>
                    <td>{part.name}</td>
                    <td>{part.description}</td>
                    <td>{part.stockQuantity}</td>
                    <td>{part.cost}€</td>
                    <td>
                      <button className="delete" onClick={() => handleDeletePart(part.id)}>🗑 Supprimer</button>
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
              <h2>Ajouter une nouvelle pièce</h2>
              <input type="text" placeholder="Nom" value={newPart.name} onChange={(e) => setNewPart({ ...newPart, name: e.target.value })} />
              <input type="text" placeholder="Description" value={newPart.description} onChange={(e) => setNewPart({ ...newPart, description: e.target.value })} />
              <input type="number" placeholder="Stock" value={newPart.stockQuantity} onChange={(e) => setNewPart({ ...newPart, stockQuantity: parseInt(e.target.value, 10) })} />
              <input type="number" placeholder="Prix" value={newPart.cost} onChange={(e) => setNewPart({ ...newPart, cost: parseFloat(e.target.value) })} />
              <input type="number" placeholder="Alerte Stock" value={newPart.lowStockAlert} onChange={(e) => setNewPart({ ...newPart, lowStockAlert: parseInt(e.target.value, 10) })} />
              <button onClick={handleAddPart}>Ajouter</button>
              <button className="cancel" onClick={() => setShowForm(false)}>Annuler</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MotorcyclePartsPage;