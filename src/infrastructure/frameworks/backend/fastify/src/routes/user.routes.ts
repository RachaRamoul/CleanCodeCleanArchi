import { FastifyInstance } from 'fastify';
import { addUser, listUsers, welcome } from '../controllers/user.controller';

export async function userRoutes(server: FastifyInstance) {
  server.get('/welcome', welcome);
  server.post('/users', addUser);
  server.get('/users', listUsers);
}
