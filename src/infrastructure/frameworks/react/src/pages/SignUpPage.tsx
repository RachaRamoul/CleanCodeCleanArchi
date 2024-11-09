import React, { useState } from 'react';
import { API_BASE_URL } from '../../config/api.config';
import '../SignUpPage.css';  // Assurez-vous que le CSS est bien importé

const SignUpPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [siretNumber, setSiretNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!firstName || !lastName || !email || !phoneNumber || !siretNumber || !companyName) {
      setError('Tous les champs doivent être remplis.');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}users/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, phoneNumber, siretNumber, companyName }),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message);
      }

      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setSiretNumber('');
      setCompanyName('');
      setError('');
      alert('Inscription réussie !');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError('Erreur lors de l\'inscription : ' + err.message);
      } else {
        setError('Une erreur inconnue s\'est produite');
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Formulaire d'inscription</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Prénom"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Nom"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Numéro de téléphone"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              value={siretNumber}
              onChange={(e) => setSiretNumber(e.target.value)}
              placeholder="Numéro SIRET"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Nom de l'entreprise"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-button">S'inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
