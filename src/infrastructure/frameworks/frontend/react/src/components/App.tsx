import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PartsListPage from '../pages/PartsListPage';
import AddPartForm from '../pages/AddPartForm';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/parts" element={<PartsListPage />} />
          <Route path="/add-part" element={<AddPartForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
