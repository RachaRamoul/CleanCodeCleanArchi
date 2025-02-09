import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import DashboardPage from '../pages/DashboardPage';
import MotorcyclePage from '../pages/MotorcyclePage';
import MotorcyclePartPage from '../pages/MotorcyclePartsPage';
import UnauthorizedPage from '../pages/UnauthorizedPage';
import NotFoundPage from '../pages/NotFoundPage';
import ProtectedRoute from './ProtectedRoute';
import Layout from './Layout';
import MotorcycleModelPage from '../pages/MotorcycleModelPage';

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
          <Route path="/model" element={<ProtectedRoute ><MotorcycleModelPage /></ProtectedRoute>}/>
          <Route path="/driver" />
          <Route path="/company" /> 
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
