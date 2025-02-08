import React, { useEffect, useState } from 'react';
import SubHeader from '../components/SubHeader';
import { companyService } from '../services/companyService';
import './DashboardPage.css';
import { LinkData } from '../types/linkData';
import { isAdminFromToken } from '../utils/tokenUtils';
import { adminLinksData, companyLinksData } from '../data/menuLinksData';
import Card from '../components/Card';
// import MotorcycleIcon from '@mui/icons-material/TwoWheeler';
// import BuildIcon from '@mui/icons-material/Build';
// import SettingsIcon from '@mui/icons-material/Settings';
// import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
// import BarChartIcon from '@mui/icons-material/BarChart';

// const iconMap: { [key: string]: JSX.Element } = {
//   motorcycle: <MotorcycleIcon style={{ fontSize: 40, color: '#ffffff' }} />,
//   maintenance: <BuildIcon style={{ fontSize: 40, color: '#ffffff' }} />,
//   parts: <SettingsIcon style={{ fontSize: 40, color: '#ffffff' }} />,
//   testRides: <DirectionsBikeIcon style={{ fontSize: 40, color: '#ffffff' }} />,
//   reports: <BarChartIcon style={{ fontSize: 40, color: '#ffffff' }} />
// };


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
      const company = await companyService.getCompanyByfilter(filter);
      console.log('Company fetched:', company);

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