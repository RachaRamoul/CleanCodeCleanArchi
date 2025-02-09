import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <h2>Page non trouvée</h2>
      <p>La page que vous recherchez n'existe pas.</p>
      <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Retour à la page d'accueil
      </a>
    </div>
  );
};

export default NotFoundPage;
