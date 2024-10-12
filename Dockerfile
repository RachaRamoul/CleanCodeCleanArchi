# Utiliser l'image Node.js
FROM node:16

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances, y compris les types pour pg et express
RUN npm install && npm install --save-dev @types/express @types/pg

# Copier tout le contenu du projet
COPY . .

# Exposer le port de l'application
EXPOSE 3000

# Lancer l'application
CMD ["npm", "run", "start:dev"]
