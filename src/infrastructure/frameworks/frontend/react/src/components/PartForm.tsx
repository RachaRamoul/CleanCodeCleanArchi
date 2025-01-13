import React, { useState } from 'react';

const PartForm = ({ onAdd }: { onAdd: (part: any) => void }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [stockQuantity, setStockQuantity] = useState(0);
  const [cost, setCost] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ name, description, stockQuantity, cost });
    setName('');
    setDescription('');
    setStockQuantity(0);
    setCost(0);
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3>Ajouter une pièce</h3>
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantité en stock"
        value={stockQuantity}
        onChange={(e) => setStockQuantity(Number(e.target.value))}
        required
      />
      <input
        type="number"
        placeholder="Coût"
        value={cost}
        onChange={(e) => setCost(Number(e.target.value))}
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default PartForm;
