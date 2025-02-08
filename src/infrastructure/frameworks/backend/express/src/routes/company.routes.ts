import express from 'express';
import { createCompany, getAllCompanies, getFilteredCompanyById } from '../controllers/company.controller';
import { isAdmin, isAuthenticated } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/', isAuthenticated, isAdmin, createCompany);

router.get('/all', isAuthenticated, getAllCompanies);

router.get('/:id', isAuthenticated, getFilteredCompanyById);

export default router;