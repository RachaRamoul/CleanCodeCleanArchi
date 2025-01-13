import React, { useState } from 'react';

const AddPartForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    stock_quantity: 0,
    cost: 0,
    lowStockAlert: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement; // Cast de type ici
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ajoutez ici l'appel à l'API pour envoyer les données au backend.
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Ajouter une pièce détachée</h2>
      <div className="form-group">
        <label htmlFor="name">Nom de la pièce :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description (optionnel) :</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="stock_quantity">Quantité en stock :</label>
        <input
          type="number"
          id="stock_quantity"
          name="stock_quantity"
          value={formData.stock_quantity}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="cost">Coût :</label>
        <input
          type="number"
          id="cost"
          name="cost"
          value={formData.cost}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="lowStockAlert"
            checked={formData.lowStockAlert}
            onChange={handleChange}
          />
          Alerte de faible stock
        </label>
      </div>

      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddPartForm;
