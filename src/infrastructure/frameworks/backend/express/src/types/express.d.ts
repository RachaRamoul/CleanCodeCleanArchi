import { Request } from 'express';

declare global {
  namespace Express {
    export interface Request {
      company?: {
        id: string;
        isAdmin: boolean;
      };
    }
  }
}
export { Request };

