import { Request, Response } from 'express';
import { AddUserUseCase } from '../../../../application/usecases/add-user.usecase';
import { ListUsersUseCase } from '../../../../application/usecases/list-users.usecase';
import {repositories} from '../../../repositories/index';

const {UserRepository} = repositories();

const userRepository = new UserRepository();
const addUserUseCase = new AddUserUseCase(userRepository);
const listUsersUseCase = new ListUsersUseCase(userRepository);

export const addUser = async (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;
  await addUserUseCase.execute(firstName, lastName);
  res.status(201).send('User added');
};

export const listUsers = async (req: Request, res: Response) => {
  const users = await listUsersUseCase.execute();
  res.json(users);
};
