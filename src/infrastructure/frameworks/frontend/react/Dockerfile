# Utiliser une image Node.js plus récente (18)
FROM node:18

# Définir le répertoire de travail pour le frontend
WORKDIR /usr/src/infrastructure/frameworks/frontend/react

# Copier package.json et installer les dépendances du frontend
COPY package*.json ./
RUN npm install

# Copier le code source du frontend
COPY . .

# Exposer le port de Vite (3000)
EXPOSE 3000

# Lancer Vite en mode développement
CMD ["npm", "run", "dev", "--", "--host"]
