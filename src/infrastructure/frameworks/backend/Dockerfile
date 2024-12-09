# Utiliser une image Node.js
FROM node:18

ENV FRAMEWORK=express
# Définir le répertoire de travail pour le backend
WORKDIR /usr/src/infrastructure

RUN echo "BACKEND_FRAMEWORK is: ${FRAMEWORK}"

COPY ../../database ./database
# je veux faire un npm install du dossier database
RUN cd database && npm install

WORKDIR /usr/src/infrastructure/frameworks/backend
COPY frameworks/backend/${FRAMEWORK} ./${FRAMEWORK}

WORKDIR /usr/src/infrastructure/frameworks/backend/${FRAMEWORK}
RUN npm install
# Exposer le port du backend (8000)
EXPOSE 8000

# Démarrer le backend en mode développement
CMD ["npm", "run", "start:dev"]
