"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoUserRepository = void 0;
const user_entity_mongodb_1 = require("../persistence/entities/user.entity-mongodb");
const user_mapper_mongodb_1 = require("../persistence/mappers/user.mapper-mongodb");
const database_config_1 = require("../../config/database.config");
const mongodb_1 = require("mongodb");
class MongoUserRepository {
    constructor() {
        this.userRepository = database_config_1.AppDataSource.getMongoRepository(user_entity_mongodb_1.UserMongoEntity);
    }
    async findById(id) {
        const userEntity = await this.userRepository.findOne({ where: { _id: new mongodb_1.ObjectId(id) } });
        return userEntity ? user_mapper_mongodb_1.UserMapper.toDomain(userEntity) : null;
    }
    async save(user) {
        const userEntity = user_mapper_mongodb_1.UserMapper.toModel(user);
        const savedUserEntity = await this.userRepository.save(userEntity);
        return user_mapper_mongodb_1.UserMapper.toDomain(savedUserEntity);
    }
    async listUsers() {
        const userEntities = await this.userRepository.find();
        return userEntities.map((userEntity) => user_mapper_mongodb_1.UserMapper.toDomain(userEntity));
    }
    async removeUser(id) {
        await this.userRepository.deleteOne({ _id: new mongodb_1.ObjectId(id) });
    }
}
exports.MongoUserRepository = MongoUserRepository;
