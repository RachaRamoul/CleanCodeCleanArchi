import { FastifyRequest } from 'fastify';
import { JwtPayload } from 'jsonwebtoken';

interface CompanyJwtPayload extends JwtPayload {
  id: string;
  isAdmin: boolean;
  iat?: number;
  exp?: number;
}

declare module 'fastify' {
  interface FastifyRequest {
    company: CompanyJwtPayload
  }
}