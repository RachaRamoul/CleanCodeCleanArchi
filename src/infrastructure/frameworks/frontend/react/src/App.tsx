import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import MotorcyclePage from './pages/MotorcyclePage';
import MotorcyclePartPage from './pages/MotorcyclePartsPage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';
import RegistrationPage from './pages/RegistrationPage';
import Layout from './components/Layout';
import CompanyDetailsPage from './pages/CompanyPage';
import CompanyEditPage from './pages/EditCompany';
import MotorcycleModelPage from './pages/MotorcycleModelPage';
import DriverDetailsPage from './pages/DriverPage';
import AddDriverPage from './pages/AddDriverPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="/notFound" element={<NotFoundPage />} />
        
        <Route element={<Layout />}>
          <Route path="/" element={<AuthPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="/motorcycle" element={<ProtectedRoute ><MotorcyclePage /></ProtectedRoute>} />
          <Route path="/motorcycle-parts" element={<ProtectedRoute><MotorcyclePartPage/></ProtectedRoute>} /> 
          <Route path="/driver" element={<ProtectedRoute><DriverDetailsPage /></ProtectedRoute>}/>
          <Route path="/driver/create" element={<ProtectedRoute><AddDriverPage /></ProtectedRoute>}/>
          <Route path="/driver/edit/:id" element={<ProtectedRoute><DriverDetailsPage /></ProtectedRoute>}/>
          
          <Route path="/company" element={<ProtectedRoute requiresAdmin={true} ><CompanyDetailsPage/></ProtectedRoute>} /> 
          <Route path="/company/register" element={<ProtectedRoute requiresAdmin={true} ><RegistrationPage/></ProtectedRoute>} />
          <Route path="/company/edit/:id" element={<ProtectedRoute requiresAdmin={true} ><CompanyEditPage/></ProtectedRoute>} />
          <Route path="/model" element={<ProtectedRoute requiresAdmin={true}><MotorcycleModelPage /></ProtectedRoute>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
