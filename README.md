# Clean Architecture Books Project

## Prerequisites

- Node.js
- Docker and Docker Compose

## Setup

1. Lancer le projet

   ```bash
   docker-compose up --build
   ```

2. Installer les dépendances du frontend

   ```bash
   docker-compose run -it frontend /bin/sh
   npm install 
   ```

3. Lancer les migrations

   ```bash
   make db-run-migration 
   ```

## A savoir

Document dans le dossier /doc

AJOUT D'UN REPOSITORY (/database)
   - Il faut l'intégrer au fichier repository.config.ts (dans le dossier /database)

