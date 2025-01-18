import express from 'express';
import { createMotorcycle, getAllMotorcycles } from '../controllers/motorcycle.controller';

const router = express.Router();

// Routes pour les motos
router.post('/', createMotorcycle);
router.get('/', getAllMotorcycles);

export default router;