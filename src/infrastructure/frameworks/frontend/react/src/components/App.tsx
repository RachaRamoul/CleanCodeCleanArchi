import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import DashboardPage from '../pages/DashboardPage';
import MotorcyclePage from '../pages/MotorcyclePage';
import UnauthorizedPage from '../pages/UnauthorizedPage';
import NotFoundPage from '../pages/NotFoundPage';
//import ProtectedRoute from './ProtectedRoute';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="/notFound" element={<NotFoundPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/motorcycle" element={<MotorcyclePage />} />
        {/* <Route path="/motorcycle" element={<ProtectedRoute requiresAdmin={true} ><MotorcyclePage /></ProtectedRoute>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
