import { Response, NextFunction } from 'express';
import { Request } from '../types/express';
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || '';


export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.status(401).json({ message: 'Authorization header is missing.' });
      return;
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      res.status(401).json({ message: 'Authorization token is missing.' });
      return;
    }

    const decodedToken = jwt.verify(token, jwtSecret) as { id: string; isAdmin: boolean };
    req.company = decodedToken;
    next();

  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(401).json({ message: 'Invalid or expired token.' });
  }
};


export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.company || !req.company.isAdmin) {
    res.status(403).json({ message: 'Access denied.' });
    return;
  }
  next(); 
};
