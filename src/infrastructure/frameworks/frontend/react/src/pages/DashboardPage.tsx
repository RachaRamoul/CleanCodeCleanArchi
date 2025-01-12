import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import './DashboardPage.css';

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-page">
      <Header />
      <main className="dashboard-main">
        <h1>Bienvenue sur la plateforme Triumph</h1>
        <div className="dashboard-sections">
          <section className="dashboard-section">
            <h2>Gestion des entretiens</h2>
            <p>Planifiez et suivez les entretiens préventifs et curatifs de vos motos.</p>
          </section>
          <section className="dashboard-section">
            <h2>Suivi des pièces détachées</h2>
            <p>Gérez le stock des pièces détachées nécessaires pour la maintenance.</p>
          </section>
          <section className="dashboard-section">
            <h2>Historique des essais</h2>
            <p>Suivez les conducteurs et gérez les incidents liés à chaque essai.</p>
          </section>
        </div>
        <button
          onClick={() => (window.location.href = '/')}
          className="logout-button"
        >
          Se déconnecter
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
