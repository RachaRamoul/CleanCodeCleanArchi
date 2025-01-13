import React from 'react';
import { Link } from 'react-router-dom';

const PartsListPage = () => {
  const parts = [
    {
      id: 1,
      name: 'Pneu',
      description: 'Pneu tout-terrain',
      stock_quantity: 50,
      cost: 120,
      lowStockAlert: false,
    },
    // juste un exemple
  ];

  return (
    <div className="parts-list">
      <h2>Liste des pièces détachées</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Quantité en stock</th>
            <th>Coût</th>
            <th>Alerte de faible stock</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((part) => (
            <tr key={part.id}>
              <td>{part.id}</td>
              <td>{part.name}</td>
              <td>{part.description}</td>
              <td>{part.stock_quantity}</td>
              <td>{part.cost}</td>
              <td>{part.lowStockAlert ? 'Oui' : 'Non'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add-part" className="button">
        Ajouter une pièce
      </Link>
    </div>
  );
};

export default PartsListPage;
