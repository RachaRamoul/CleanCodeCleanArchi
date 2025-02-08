import { FastifyReply, FastifyRequest } from "fastify"
import { CompanyJwtPayload } from "../types/fastify";

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  try {
    await request.jwtVerify()
  } catch (err) {
    reply.code(401).send({
      error: 'Unauthorized',
      message: 'Invalid or missing token.'
    })
  }
}

export async function isAdmin(request: FastifyRequest, reply: FastifyReply) {
  try {
    const company = request.company as CompanyJwtPayload;
    
    if (!company.isAdmin) {
      return reply.code(403).send({
        error: 'Forbidden',
        message: 'Unauthorized access'
      });
    }
  } catch (err) {
    return reply.code(403).send({
      error: 'Forbidden',
      message: 'Administrator rights check error'
    });
  }
}