
DANS LE .env, les variables d'environnement :
   DB_TYPE
   - DB_TYPE=mongodb => Base de données MongoDB
   - DB_TYPE=postgres => Base de données Postgres

   BACKEND_FRAMEWORK (Il faut également modifier le dockerfile du backend ENV FRAMEWORK=${nom_framework} avec ${nom_framework} le nom du framework [express OU fastify])
   - BACKEND_FRAMEWORK=express => Serveur express
   - BACKEND_FRAMEWORK=fastify => Serveur fastify