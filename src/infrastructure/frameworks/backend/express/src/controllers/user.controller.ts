import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

const userService = new UserService();

export const addUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName } = req.body;
    await userService.addUser(firstName, lastName);
    res.status(201).send('User added');
  } catch (error) {
    res.status(500).json({ message: 'Error adding user', error: error.message });
  }
};

export const listUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.listUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error listing users', error: error.message });
  }
};
