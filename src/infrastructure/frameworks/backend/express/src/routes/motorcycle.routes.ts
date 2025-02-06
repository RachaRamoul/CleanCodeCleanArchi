import express from 'express';
import { createMotorcycle, getAllMotorcycles, deleteMotorcycle } from '../controllers/motorcycle.controller';
import { isAdmin, isAuthenticated } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/', isAuthenticated, isAdmin, createMotorcycle);
router.get('/', isAuthenticated, getAllMotorcycles);
router.delete('/:id', isAuthenticated, isAdmin, deleteMotorcycle);

export default router;