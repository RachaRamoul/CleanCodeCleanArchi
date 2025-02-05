import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { partsService } from '../services/partsService';
import './PartsPage.css';

const PartsPage: React.FC = () => {
  const [parts, setParts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPart, setNewPart] = useState({ name: '', stock: 0, price: 0 });

  useEffect(() => {
    fetchParts();
  }, []);

  const fetchParts = async () => {
    try {
      const data = await partsService.listParts();
      setParts(data);
    } catch (error) {
      console.error('Erreur lors du chargement des pièces :', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Voulez-vous supprimer cette pièce ?")) {
      try {
        await partsService.deletePart(id);
        fetchParts();
      } catch (error) {
        console.error("Erreur lors de la suppression :", error);
      }
    }
  };

  const handleAddPart = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await partsService.addPart(newPart);
      fetchParts();
      setIsModalOpen(false);
      setNewPart({ name: '', stock: 0, price: 0 }); // Reset form
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error);
    }
  };

  return (
    <div className="parts-page">
      <Header />
      <main className="parts-main">
        <h1>Gestion des Pièces Détachées</h1>

        <button className="add-part-button" onClick={() => setIsModalOpen(true)}>
          ➕ Ajouter une pièce
        </button>

        {/* Table des pièces détachées */}
        <table className="parts-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Stock</th>
              <th>Prix (€)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part) => (
              <tr key={part.id}>
                <td>{part.id}</td>
                <td>{part.name}</td>
                <td>{part.stock}</td>
                <td>{part.price}</td>
                <td>
                  <button className="delete" onClick={() => handleDelete(part.id)}>🗑 Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal pour ajouter une pièce */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Ajouter une Pièce</h2>
              <form onSubmit={handleAddPart}>
                <input 
                  type="text" 
                  placeholder="Nom" 
                  required 
                  value={newPart.name} 
                  onChange={(e) => setNewPart({ ...newPart, name: e.target.value })} 
                />
                <input 
                  type="number" 
                  placeholder="Stock" 
                  required 
                  value={newPart.stock} 
                  onChange={(e) => setNewPart({ ...newPart, stock: Number(e.target.value) })} 
                />
                <input 
                  type="number" 
                  placeholder="Prix (€)" 
                  required 
                  value={newPart.price} 
                  onChange={(e) => setNewPart({ ...newPart, price: Number(e.target.value) })} 
                />
                <button type="submit">Ajouter</button>
                <button className="cancel" onClick={() => setIsModalOpen(false)}>Annuler</button>
              </form>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default PartsPage;