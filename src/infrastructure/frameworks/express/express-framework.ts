import express, { Request, Response } from 'express';
import { AddUserUseCase } from '../../../application/usecases/add-user.usecase';
import { ListUsersUseCase } from '../../../application/usecases/list-users.usecase';
import { PostgresUserRepository } from '../../repositories/postgres/user.repository';
import path from 'path'; // Ajoute cela pour servir les fichiers statiques

const app = express();
app.use(express.json());

// Servir les fichiers statiques (comme index.html) depuis le dossier frontend
app.use(express.static(path.join(__dirname, '../../../frontend')));

// Route pour l'index.html (facultatif si le fichier est déjà servi comme fichier statique)
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../../frontend/index.html'));
});

const userRepository = new PostgresUserRepository();
const addUserUseCase = new AddUserUseCase(userRepository);
const listUsersUseCase = new ListUsersUseCase(userRepository);

app.post('/users', async (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;
  await addUserUseCase.execute(firstName, lastName);
  res.status(201).send('User added');
});

app.get('/users', async (req: Request, res: Response) => {
  const users = await listUsersUseCase.execute();
  res.json(users);
});

export default app;
