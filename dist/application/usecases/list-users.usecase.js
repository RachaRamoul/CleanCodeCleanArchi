"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsersUseCase = void 0;
class ListUsersUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        return await this.repository.listUsers();
    }
}
exports.ListUsersUseCase = ListUsersUseCase;
