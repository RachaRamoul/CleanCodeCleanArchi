import { FastifyRequest, FastifyReply } from 'fastify';
import { UserService } from '../services/user.service';

const userService = new UserService();

export const addUser = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { firstName, lastName } = request.body as { firstName: string; lastName: string };
    await userService.addUser(firstName, lastName);
    reply.status(201).send({ message: 'User added' });
  } catch (error) {
    reply.status(500).send({ message: 'Error adding user', error: error.message });
  }
};

export const listUsers = async (_request: FastifyRequest, reply: FastifyReply) => {
  try {
    const users = await userService.listUsers();
    reply.send(users);
  } catch (error) {
    reply.status(500).send({ message: 'Error listing users', error: error.message });
  }
};

export const welcome = async (_request: FastifyRequest, reply: FastifyReply) => {
  reply.send({ message: 'Welcome to Fastify!' });
}
