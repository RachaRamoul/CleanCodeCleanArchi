import Fastify from 'fastify';
import fastifyJwt from 'fastify-jwt';
import cors from '@fastify/cors';
import registerRoutes from './routes/index';
import { initializeDatabase } from '../../../../database/config/database.config';
import { authDecorator } from './middlewares/auth.decorator';

const PORT = 8000;
const hostname = '0.0.0.0';
const jwtSecret = process.env.JWT_SECRET || ''; 

const server = Fastify({ logger: true });

server.register(cors, { origin: '*' });

server.register(fastifyJwt, {secret: jwtSecret});

authDecorator(server);

server.register(registerRoutes, { prefix: '/' });

initializeDatabase()
.then(() => {
  return server.listen({ port: PORT, host: hostname });
})
.then(() => {
  console.log(`Server fastify running at http://localhost:${PORT}`);
})
.catch((error) => {
  server.log.error(error);
  process.exit(1);
});
