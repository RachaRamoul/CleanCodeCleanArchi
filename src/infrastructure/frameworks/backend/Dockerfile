# Utiliser une image Node.js officielle
FROM node:18

# Définir le répertoire de travail pour le backend
WORKDIR /usr/src/infrastructure

# Copier uniquement les fichiers nécessaires
COPY ../../database ./database
WORKDIR /usr/src/infrastructure/database

# Installer les dépendances et reconstruire les modules natifs
RUN npm install && npm rebuild bcrypt --build-from-source

WORKDIR /usr/src/infrastructure/frameworks/backend

# Copier et installer les dépendances pour Express
COPY frameworks/backend/express ./express
RUN cd express && npm install && npm rebuild bcrypt --build-from-source

# Copier et installer les dépendances pour Fastify
COPY frameworks/backend/fastify ./fastify
RUN cd fastify && npm install && npm rebuild bcrypt --build-from-source

# Exposer les ports utilisés par les services backend
EXPOSE 8000 8001

# Commande pour démarrer les serveurs
CMD ["sh", "-c", "npm run start:dev --prefix ./express & npm run start:dev --prefix ./fastify"]
