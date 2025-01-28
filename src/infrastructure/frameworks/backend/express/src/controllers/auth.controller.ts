import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { repositories } from '../../../../../database/config/repository.config';

const { CompanyRepository } = repositories();
const jwtSecret = process.env.JWT_SECRET || ''; 
const authService = new AuthService(CompanyRepository, jwtSecret);

export const authenticateCompany = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: 'Email and password are required.' });
      return;
    }
    const token: string = await authService.authenticate(email, password);
    
    res.status(200).json({ token });

  } catch (error) {
    console.error('Error authenticating company:', error.message);
    res.status(401).json({ message: error.message });
  }
};

export const validateToken = (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      res.status(401).json({ message: 'Authorization token is required.' });
      return;
    }

    const decoded = authService.validateToken(token);
    res.status(200).json({ message: 'Token is valid.', decoded });
  } catch (error) {
    console.error('Error validating token:', error.message);
    res.status(401).json({ message: error.message });
  }
};
