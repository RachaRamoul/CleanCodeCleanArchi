import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MotorcyclePage: React.FC = () => {
  // Données mockées pour les motos
  const [motorcycles, setMotorcycles] = useState([
    { id: 1, model: 'Tiger Sport 660', mileage: 12000, status: 'Disponible' },
    { id: 2, model: 'Street Triple RS', mileage: 16000, status: 'En maintenance' },
    { id: 3, model: 'Bonneville T100', mileage: 8000, status: 'Disponible' },
  ]);

  return (
    <div className="motorcycle-page">
      <Header />
      <main>
        <h1>Gestion des motos</h1>

        <table>
          <thead>
            <tr>
              <th>Modèle</th>
              <th>Kilométrage</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {motorcycles.map((moto) => (
              <tr key={moto.id}>
                <td>{moto.model}</td>
                <td>{moto.mileage} km</td>
                <td>{moto.status}</td>
                <td>
                  <button onClick={() => alert(`Détails pour ${moto.model}`)}>
                    Détails
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className="add-button"
          onClick={() => alert('Ajout d’une nouvelle moto')}
        >
          Ajouter une moto
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default MotorcyclePage;
