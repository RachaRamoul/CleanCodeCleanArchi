"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const user_entity_1 = require("../../../../../domain/entities/user.entity");
const user_entity_mongodb_1 = require("../entities/user.entity-mongodb");
class UserMapper {
    static toDomain(userEntity) {
        return new user_entity_1.User(userEntity.id, userEntity.firstName, userEntity.lastName);
    }
    static toModel(user) {
        const userEntity = new user_entity_mongodb_1.UserMongoEntity();
        userEntity.firstName = user.firstName;
        userEntity.lastName = user.lastName;
        return userEntity;
    }
}
exports.UserMapper = UserMapper;
