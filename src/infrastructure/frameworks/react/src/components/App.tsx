import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from '../pages/SignUpPage';
import HomePage from '../pages/HomePage'; 

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* Ajoutez d'autres routes si nécessaire */}
      </Routes>
    </Router>
  );
};

export default App;
