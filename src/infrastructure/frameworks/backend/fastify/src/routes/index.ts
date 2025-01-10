import { FastifyInstance } from 'fastify';
import userRoutes from './user.routes';


export default async function registerRoutes (app: FastifyInstance): Promise<void> {
  app.register(userRoutes, { prefix: '/users' });
};
