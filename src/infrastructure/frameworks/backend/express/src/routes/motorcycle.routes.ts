import express from 'express';
import { createMotorcycle, getAllMotorcycles, deleteMotorcycle } from '../controllers/motorcycle.controller';

const router = express.Router();

router.post('/', createMotorcycle);
router.get('/', getAllMotorcycles);
router.delete('/:id', deleteMotorcycle);

export default router;