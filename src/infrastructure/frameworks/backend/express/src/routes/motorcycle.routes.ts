import express from 'express';
import { createMotorcycle, getAllMotorcycles } from '../controllers/motorcycle.controller';

const router = express.Router();

router.post('/', createMotorcycle);
router.get('/', getAllMotorcycles);

export default router;