import express from 'express';
import { createCompany, getAllCompanies, getFilteredCompanyById } from '../controllers/company.controller';
import { isAdmin, isAuthenticated } from '../middlewares/auth.middleware';

const router = express.Router();
//enlever les middleware isAuthenticated et isAdmin pour enlever la sécu backend si besoin mais remettre par la suite
router.post('/', isAuthenticated, isAdmin, createCompany);
router.get('/all', isAuthenticated, getAllCompanies);
router.get('/:id', isAuthenticated, getFilteredCompanyById);

export default router;