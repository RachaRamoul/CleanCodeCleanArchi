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

DANS LE .env, les variables d'environnement :
   DB_TYPE
   - DB_TYPE=mongodb => Base de données MongoDB
   - DB_TYPE=postgres => Base de données Postgres

   BACKEND_FRAMEWORK (Il faut également modifier le dockerfile du backend ENV FRAMEWORK=${nom_framework} avec ${nom_framework} le nom du framework [express OU nestjs])
   - BACKEND_FRAMEWORK=express => Serveur express
   - BACKEND_FRAMEWORK=nestjs => Serveur nestjs


AJOUT D'UN REPOSITORY (/database)
   - Il faut l'intégrer au fichier repository.config.ts (dans le dossier /database)

