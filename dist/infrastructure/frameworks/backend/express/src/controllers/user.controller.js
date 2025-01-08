"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsers = exports.addUser = void 0;
const add_user_usecase_1 = require("../../../../../../application/usecases/add-user.usecase");
const list_users_usecase_1 = require("../../../../../../application/usecases/list-users.usecase");
const repository_config_1 = require("../../../../../database/config/repository.config");
const { UserRepository } = (0, repository_config_1.repositories)();
const userRepository = new UserRepository();
const addUserUseCase = new add_user_usecase_1.AddUserUseCase(userRepository);
const listUsersUseCase = new list_users_usecase_1.ListUsersUseCase(userRepository);
const addUser = async (req, res) => {
    const { firstName, lastName } = req.body;
    await addUserUseCase.execute(firstName, lastName);
    res.status(201).send('User added');
};
exports.addUser = addUser;
const listUsers = async (req, res) => {
    const users = await listUsersUseCase.execute();
    res.json(users);
};
exports.listUsers = listUsers;
