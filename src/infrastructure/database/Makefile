# Define variables for commonly used commands
DOCKER_COMPOSE = docker-compose exec backend sh -c
TYPEORM = typeorm migration:
MIGRATION_PATH = ./postgres/migrations/
DB_CONFIG_PATH = -- -d ./postgres/postgres.config.ts 


TS_NODE=npx ts-node
FIXTURES_PATH=./fixtures/allFixtures.ts

# Commande to run fixtures
run-fixtures:
	@echo "Lancement des fixtures..."
	$(TS_NODE) $(FIXTURES_PATH)
	@echo "Fixtures exécutées avec succès !"

# Command to generate a migration
db-generate-migration:
	@read -p "Migration name: " name; \
	$(DOCKER_COMPOSE) "cd ../../database && npm run ${TYPEORM}generate ${DB_CONFIG_PATH} ${MIGRATION_PATH}$$name"

# Command to create a new migration
db-create-migration:
	@read -p "Migration name: " name; \
	$(DOCKER_COMPOSE) "cd ../../database && npm run ${TYPEORM}create ${MIGRATION_PATH}$$name"

# Command to run migrations
db-run-migration:
	$(DOCKER_COMPOSE) "cd ../../database && npm run ${TYPEORM}run ${DB_CONFIG_PATH}"

# Command to revert the last migration
db-revert-migrate:
	$(DOCKER_COMPOSE) "cd ../../database && npm run ${TYPEORM}revert ${DB_CONFIG_PATH}"

# Command to delete the database and migration files
db-delete:
	@echo "Deleting the database..."
	$(DOCKER_COMPOSE) "cd ../../database && npm run typeorm schema:drop ${DB_CONFIG_PATH}"
	@echo "Removing migration files..."
	@rm -rf $(MIGRATION_PATH)*

# Command to reset the database and migrations
db-reset: db-delete db-generate-migration db-run-migration
	@echo "Database and migrations reset successfully."