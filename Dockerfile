# Utiliser une image Node.js
FROM node:18

# Définir le répertoire de travail pour le backend
WORKDIR /usr/src/app

# Copier les fichiers package.json et installer les dépendances backend
COPY package*.json ./
RUN npm install

# Copier tout le code source du backend
COPY . .

# Exposer le port du backend (8000)
EXPOSE 8000

# Démarrer le backend en mode développement
CMD ["npm", "run", "start:dev"]
