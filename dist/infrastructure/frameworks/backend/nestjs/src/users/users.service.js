"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const list_users_usecase_1 = require("../../../../../../application/usecases/list-users.usecase");
const add_user_usecase_1 = require("../../../../../../application/usecases/add-user.usecase");
const repository_config_1 = require("../../../../../database/config/repository.config");
let UsersService = class UsersService {
    constructor() {
        const { UserRepository } = (0, repository_config_1.repositories)();
        const userRepository = new UserRepository();
        this.addUserUseCase = new add_user_usecase_1.AddUserUseCase(userRepository);
        this.listUsersUseCase = new list_users_usecase_1.ListUsersUseCase(userRepository);
    }
    async addUser(firstName, lastName) {
        await this.addUserUseCase.execute(firstName, lastName);
        return { message: 'User added' };
    }
    async listUsers() {
        return await this.listUsersUseCase.execute();
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UsersService);
