import express from 'express';
import { 
  addMotorcycleModel, 
  getMotorcycleModelById, 
  getMotorcycleModelByName, 
  getAllMotorcycleModels, 
  updateMotorcycleModel, 
  deleteMotorcycleModel 
} from '../controllers/motorcycle-model.controller';
import { isAdmin, isAuthenticated } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/', isAuthenticated, isAdmin, addMotorcycleModel);

router.get('/:id',isAuthenticated, getMotorcycleModelById);

router.get('/',isAuthenticated, getMotorcycleModelByName);

router.get('/all',isAuthenticated, getAllMotorcycleModels);

router.put('/:id', isAuthenticated, isAdmin, updateMotorcycleModel);

router.delete('/:id', isAuthenticated, isAdmin, deleteMotorcycleModel);

export default router;