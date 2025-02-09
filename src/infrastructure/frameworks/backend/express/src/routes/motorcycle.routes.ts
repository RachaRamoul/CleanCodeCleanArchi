import express from 'express';
import { 
  createMotorcycle, 
  getAllMotorcycles, 
  deleteMotorcycle, 
  updateMotorcycle
} from '../controllers/motorcycle.controller';
import { isAdmin, isAuthenticated } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/', isAuthenticated, isAdmin, createMotorcycle);
router.get('/', isAuthenticated, getAllMotorcycles);
router.put('/:id', isAuthenticated, updateMotorcycle);
router.delete('/:id', isAuthenticated, isAdmin, deleteMotorcycle);

export default router;
