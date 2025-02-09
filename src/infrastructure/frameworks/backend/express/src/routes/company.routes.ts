import express from 'express';
import { createCompany, deleteCompany, getAllCompanies, getFilteredCompanyById, updateCompany } from '../controllers/company.controller';
import { isAdmin, isAuthenticated } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/', isAuthenticated, isAdmin, createCompany);

router.get('/all', isAuthenticated, getAllCompanies);

router.get('/:id', isAuthenticated, getFilteredCompanyById);

router.put('/:id', isAuthenticated, isAdmin, updateCompany);

router.delete('/:id', isAuthenticated, isAdmin, deleteCompany);

export default router;