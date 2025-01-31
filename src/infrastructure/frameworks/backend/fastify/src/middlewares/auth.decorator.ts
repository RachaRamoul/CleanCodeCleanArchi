import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export async function authDecorator(app: FastifyInstance) {
  app.decorate('authenticate', async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      await request.jwtVerify();
    } catch (error) {
      reply.status(401).send({ message: 'Unauthorized access', error: error.message });
    }
  });
}