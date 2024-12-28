
Voici les étapes à suivre lorsque vous créez une entité (avec ses méthodes pour pouvoir l'utiliser): 

- Dans domain : Créer l'entité avec la gestion des erreurs potentielles (domain/errors)

- Dans application : Créer l'interface du repository (application/repositories) et les uses-cases (application/usecases)

- Pour Postgres : 
    - Créer l'entité TypeORM (exemple: user.entity-postgres.ts)
    - Générer un fichier de migration en se placant dans src/infrastructure/database à l'aide de la commande : make db-generate-migration
    - lancer les migrations en se placant toujours dans src/infrastructure/database à l'aide de la commande : make db-run-migration
    - Créer un mapper (exemple: user.mapper-postgres.ts)
    - Créer le repository (user.repository-postgres.ts)

- Pour Mongodb : 
    - Créer l'interface etendu du document et l'entité mongoose (exemple: user.entity-mongodb.ts)
    - Créer un mapper (exemple: user.mapper-mongodb.ts)
    - Créer le repository (user.repository-mongodb.ts)


- Ajouter le repository dans le fichier repository.config.ts situé dans src/infrastructure/database/config/
