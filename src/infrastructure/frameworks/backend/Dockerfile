# Utiliser une image Node.js
FROM node:18

# Définir le répertoire de travail pour le backend
WORKDIR /usr/src/infrastructure

COPY ../../database ./database
# Installation des dépendances dans le dossier database
RUN cd database && npm install

WORKDIR /usr/src/infrastructure/frameworks/backend
COPY frameworks/backend/express ./express
RUN cd express && npm install

COPY frameworks/backend/fastify ./fastify
RUN cd fastify && npm install

# Exposer le port du backend (8000)
EXPOSE 8000 8001

# Démarrer le backend en mode développement
CMD ["sh", "-c", "npm run start:dev --prefix ./express & npm run start:dev --prefix ./fastify"]