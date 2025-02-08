import React, { useState } from 'react';
import './AuthPage.css';
import { authService } from '../services/authService';
import { saveToken } from '../utils/localStorage';
import { useNavigate } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const token = await authService.login(email, password);
      saveToken(token); 
      navigate('/dashboard');
    } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message); 
        } else {
          setError("Une erreur inconnue est survenue.");
        }
        console.error('Login failed:', error);
      } finally {
        setLoading(false);
      }
  };

  return (
    <div className="auth-page">
      <main className="auth-main">
        <form onSubmit={handleLogin} className="auth-form">
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
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="auth-button">
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>

          <div className="auth-links">
          <a href="/forgot-password">Mot de passe oublié ?</a>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AuthPage;
