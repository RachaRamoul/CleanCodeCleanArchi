# Clean Architecture Books Project

## Prerequisites

- Node.js
- Docker and Docker Compose

## Setup


1. Installer les dépendances du frontend

   ```bash
   cd src/infrastructure/frameworks/frontend/react/
   npm install 
   ```

2. Installer les dépendances du backend

   ```bash
   cd src/infrastructure/frameworks/backend/express/
   npm install 
   cd ../fastify/
   npm install
   ```

3. Installer les dépendances du database

   ```bash
   cd src/infrastructure/database/
   npm install 
   ```

4. Lancer le projet

   ```bash
   docker-compose up --build
   ```


5. Lancer les migrations

   ```bash
   cd src/infrastructure/database/
   make db-run-migration 
   ```

6. Lancer les fixtures

   ```bash
   docker compose run -it --entrypoint /bin/sh backend 
   cd ../../database
   make run-fixtures 
   ```

## A savoir

Document dans le dossier /doc

AJOUT D'UN REPOSITORY (/database)
   - Il faut l'intégrer au fichier repository.config.ts (dans le dossier /database)

