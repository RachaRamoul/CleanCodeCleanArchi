import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import { companyService } from '../services/companyService';
import { authService } from '../services/authService';
import './DashboardPage.css';

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
  };

  return (
    <div className="dashboard-page">
      <Header />
      <SubHeader title="Dashboard" />
      <main className="dashboard-main">
        <h1>Bienvenue {companyName} sur la plateforme Triumph</h1>
        <button onClick={authService.logout} className="logout-button">
          🔒 Se Déconnecter
        </button>
        <div className="dashboard-menu">
          <Link to="/motorcycle" className="dashboard-box">
            <h2>🚲 Gérer les Motos</h2>
            <p>Ajouter, supprimer et gérer les informations des motos.</p>
          </Link>

          <Link to="/maintenance" className="dashboard-box">
            <h2>🛠 Gestion des Entretiens</h2>
            <p>Planifiez et suivez les entretiens préventifs et curatifs.</p>
          </Link>

          <Link to="/parts" className="dashboard-box">
            <h2>⚙️ Suivi des Pièces Détachées</h2>
            <p>Gérez l'inventaire des pièces détachées et leur disponibilité.</p>
          </Link>

          <Link to="/test-rides" className="dashboard-box">
            <h2>🏍 Historique des Essais</h2>
            <p>Suivez les conducteurs et gérez les essais de motos.</p>
          </Link>

          <Link to="/reports" className="dashboard-box">
            <h2>📊 Rapports et Incidents</h2>
            <p>Consultez les rapports d’incidents et les statistiques.</p>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;