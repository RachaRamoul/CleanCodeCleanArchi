import express from 'express';
import {
  createMotorcyclePart,
  getAllMotorcycleParts,
  getMotorcyclePartById,
  updateMotorcyclePart,
  deleteMotorcyclePart
} from '../controllers/motorcycle-part.controller';

const router = express.Router();

router.post('/', createMotorcyclePart);
router.get('/', getAllMotorcycleParts);
router.get('/:id', getMotorcyclePartById);
router.put('/:id', updateMotorcyclePart);
router.delete('/:id', deleteMotorcyclePart);

export default router;