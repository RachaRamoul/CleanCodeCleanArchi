import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,    // Écoute sur 0.0.0.0 pour que le conteneur Docker puisse l'utiliser
    port: 3001,    // Le port sur lequel l'application React sera servie
  },
});
