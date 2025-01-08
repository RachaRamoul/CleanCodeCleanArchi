"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserUseCase = void 0;
const user_entity_1 = require("../../domain/entities/user.entity");
class AddUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(firstName, lastName) {
        const user = new user_entity_1.User('', firstName, lastName);
        await this.repository.save(user);
    }
}
exports.AddUserUseCase = AddUserUseCase;
