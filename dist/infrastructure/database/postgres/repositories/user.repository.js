"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresUserRepository = void 0;
const user_entity_postgres_1 = require("../persistence/entities/user.entity-postgres");
const user_mapper_postgres_1 = require("../persistence/mappers/user.mapper-postgres");
const database_config_1 = require("../../config/database.config");
class PostgresUserRepository {
    constructor() {
        this.userRepository = database_config_1.AppDataSource.getRepository(user_entity_postgres_1.UserPostgresEntity);
    }
    async findById(id) {
        const userEntity = await this.userRepository.findOneBy({ id });
        return userEntity ? user_mapper_postgres_1.UserMapper.toDomain(userEntity) : null;
    }
    async save(user) {
        const userEntity = user_mapper_postgres_1.UserMapper.toModel(user);
        const savedUserEntity = await this.userRepository.save(userEntity);
        return user_mapper_postgres_1.UserMapper.toDomain(savedUserEntity);
    }
    async listUsers() {
        const userEntities = await this.userRepository.find();
        return userEntities.map((userEntity) => user_mapper_postgres_1.UserMapper.toDomain(userEntity));
    }
    async removeUser(id) {
        await this.userRepository.delete({ id });
    }
}
exports.PostgresUserRepository = PostgresUserRepository;
