import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Logique de connexion (API, validation, etc.)
  };

  return (
    <div className="home-page">
      <Header />

      <main className="home-main">
        <form onSubmit={handleLogin} className="home-form">
          <h2>Connexion</h2>

          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>

          <button type="submit" className="home-button">
            Se connecter
          </button>

          <div className="home-links">
            <a href="/signup">Créer un compte</a> | <a href="/forgot-password">Mot de passe oublié ?</a>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
