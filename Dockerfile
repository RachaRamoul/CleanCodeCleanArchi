# Utiliser une image Node.js
FROM node:16

# Définir le répertoire de travail pour le backend
WORKDIR /usr/src/app

# Copier les fichiers package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier tout le code du backend
COPY . .

# Construire le frontend React
WORKDIR /usr/src/app/src/infrastructure/react
RUN npm install
RUN npm run build

# Retourner au répertoire backend pour lancer l'application
WORKDIR /usr/src/app

# Exposer le port du backend (par exemple NestJS ou Express)
EXPOSE 3000

# Lancer l'application backend
CMD ["npm", "run", "start:dev"]
