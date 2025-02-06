import express from 'express';
import {
  createMotorcyclePart,
  getAllMotorcycleParts,
  getMotorcyclePartById,
  updateMotorcyclePart,
  deleteMotorcyclePart
} from '../controllers/motorcycle-part.controller';
import { isAuthenticated } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/', isAuthenticated, createMotorcyclePart);
router.get('/', isAuthenticated,getAllMotorcycleParts);
router.get('/:id', isAuthenticated, getMotorcyclePartById);
router.put('/:id', isAuthenticated, updateMotorcyclePart);
router.delete('/:id', isAuthenticated, deleteMotorcyclePart);

export default router;