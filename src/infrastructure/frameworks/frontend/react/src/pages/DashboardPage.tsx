import React, { useEffect, useState } from 'react';
import SubHeader from '../components/SubHeader';
import { CompanyService } from '../services/companyService';
import './DashboardPage.css';
import { LinkData } from '../types/linkData';
import { isAdminFromToken } from '../utils/tokenUtils';
import { adminLinksData, companyLinksData } from '../data/menuLinksData';
import Card from '../components/Card';


const DashboardPage: React.FC = () => {
  const [companyName, setCompanyName] = useState<string>('Unknown');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    getCompanyName();
    getCompanyRole();
  }, []);

  const getCompanyName = async () => {
    try {
      const filter = 'name';
      const company = await CompanyService.getCompanyByfilter(filter);
      if (company && company.name && typeof company.name === 'string') {
        setCompanyName(company.name);
      }
    } catch (error) {
      console.error('Erreur lors du fetch de la compagnie :', error);
    }
  };

  const getCompanyRole = () => {
    const admin: boolean | null = isAdminFromToken();
    if(admin){
      setIsAdmin(true);
    }else{
      setIsAdmin(false);
    } 
  };

  const getRelevantLinks = (): LinkData[] => {
    return isAdmin ? adminLinksData : companyLinksData;
  };

  const renderCards = () => {
    const linksToDisplay = getRelevantLinks();
    return linksToDisplay
      .map((link: LinkData, index: number) => (
        <Card
          key={index}
          navigateTo={link.navigateTo}
          title={link.title}
          description={link.description}
        />
      ));
  };
  
  
  return (
    <div className="dashboard-page">
      <SubHeader title="Dashboard" />
      <main className="dashboard-main">
        <h1>Bienvenue {companyName} sur la plateforme Triumph</h1>
        <div className="dashboard-menu">
          {renderCards()}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;