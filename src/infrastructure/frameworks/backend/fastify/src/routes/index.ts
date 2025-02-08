import { FastifyInstance } from 'fastify';
import driverRoutes from './driver.routes';

export default async function registerRoutes (app: FastifyInstance): Promise<void> {
    app.register(driverRoutes, { prefix: '/driver' }); 
};