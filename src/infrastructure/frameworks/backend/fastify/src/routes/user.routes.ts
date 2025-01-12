import { FastifyInstance } from 'fastify';
import { addUser, listUsers, welcome } from '../controllers/user.controller';

export default async function userRoutes(server: FastifyInstance) {
  server.get('/welcome', welcome);
  server.post('/', addUser);
  server.get('/', listUsers);
}
