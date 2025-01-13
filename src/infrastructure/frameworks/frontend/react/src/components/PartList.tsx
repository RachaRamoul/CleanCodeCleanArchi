import React from 'react';

const PartList = ({ parts }: { parts: any[] }) => {
  return (
    <div className="card">
      <h3>Liste des pièces</h3>
      <ul>
        {parts.map((part, index) => (
          <li key={index}>
            <strong>{part.name}</strong> - {part.description || 'Aucune description'} - 
            {part.stockQuantity} en stock - {part.cost} €
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartList;
