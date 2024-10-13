import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddUserUseCase } from '../../../application/usecases/add-user.usecase';
import { ListUsersUseCase } from '../../../application/usecases/list-users.usecase';
import { PostgresUserRepository } from '../../repositories/postgres/user.repository';
import path from 'path';

const app = express();
app.use(express.json());
app.use(cors());
// Définir les routes d'API avant de servir les fichiers statiques

const userRepository = new PostgresUserRepository();
const addUserUseCase = new AddUserUseCase(userRepository);
const listUsersUseCase = new ListUsersUseCase(userRepository);

// Route pour ajouter un utilisateur
app.post('/users', async (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;
  await addUserUseCase.execute(firstName, lastName);
  res.status(201).send('User added');
});

// Route pour lister les utilisateurs
app.get('/users', async (req: Request, res: Response) => {
  const users = await listUsersUseCase.execute();
  res.json(users);
});

export default app;
