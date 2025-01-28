import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { companyService } from '../services/companyService';
import { authService } from '../services/authService';
//import './DashboardPage.css';

const DashboardPage: React.FC = () => {

  const [companyName, setCompanyName] = useState<string>('Unknown');

  useEffect(() => {
    getCompanyName();
  }, []);

  const getCompanyName = async () => {
    try {
      const filter = 'name';
      const company = await companyService.getCompanyByfilter(filter);
      console.log('Company fetched:', company);
  
      if (company && company.name) {
        setCompanyName(company.name);
      }
    } catch (error) {
      console.error('Erreur lors du fetch de la compagnie :', error);
    }
  }

  return (
    <div className="dashboard-page">
      <Header />
      <main className="dashboard-main">
        <h1>Bienvenue { companyName } sur la plateforme Triumph</h1>
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
          onClick={authService.logout}
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
