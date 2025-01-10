import Fastify from 'fastify';
import cors from '@fastify/cors';
import { userRoutes } from './routes/user.routes';
import initializeDatabase from '../../../../database/config/database.config';

const PORT = 8000;
const hostname = '0.0.0.0';

const server = Fastify({ logger: true });

server.register(cors, { origin: '*' });

server.register(userRoutes, { prefix: '/' });

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
