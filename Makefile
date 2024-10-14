# Define variables for commonly used commands
DOCKER_COMPOSE = docker-compose exec backend npm run
TYPEORM = typeorm migration:
MIGRATION_PATH = src/infrastructure/migrations/postgres/
DB_CONFIG_PATH = -- -d src/infrastructure/config/database.config.ts 

# Command to generate a migration
db-generate-migration:
	@read -p "Migration name: " name; \
	$(DOCKER_COMPOSE) ${TYPEORM}generate ${DB_CONFIG_PATH} ${MIGRATION_PATH}$$name

# Command to create a new migration
db-create-migration:
	@read -p "Migration name: " name; \
	$(DOCKER_COMPOSE) ${TYPEORM}create -- ${MIGRATION_PATH}$$name

# Command to run migrations
db-run-migration:
	$(DOCKER_COMPOSE) ${TYPEORM}run ${DB_CONFIG_PATH}

# Command to revert the last migration
db-revert-migrate:
	$(DOCKER_COMPOSE) ${TYPEORM}revert ${DB_CONFIG_PATH}

# Command to delete the database and migration files
db-delete:
	@echo "Deleting the database..."
	$(DOCKER_COMPOSE) typeorm schema:drop ${DB_CONFIG_PATH}
	@echo "Removing migration files..."
	@rm -rf $(MIGRATION_PATH)*

# Command to reset the database and migrations
db-reset: db-delete db-generate-migration db-run-migration
	@echo "Database and migrations reset successfully."
