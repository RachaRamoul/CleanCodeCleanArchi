"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositories = void 0;
const user_repository_1 = require("../mongodb/repositories/user.repository");
const user_repository_2 = require("../postgres/repositories/user.repository");
require('dotenv').config();
const DB_TYPE = process.env.DB_TYPE;
const repositories = () => {
    if (DB_TYPE == 'postgres') {
        return {
            UserRepository: user_repository_2.PostgresUserRepository,
        };
    }
    else if (DB_TYPE == 'mongodb') {
        return {
            UserRepository: user_repository_1.MongoUserRepository
        };
    }
    throw new Error('DB_TYPE non supporté');
};
exports.repositories = repositories;
