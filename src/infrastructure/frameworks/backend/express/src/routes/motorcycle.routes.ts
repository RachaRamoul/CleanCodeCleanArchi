import { Router } from 'express';
import { addMotorcycle, listMotorcycles } from '../controllers/motorcycle.controller';

const router = Router();

router.post('/', addMotorcycle); // POST /motorcycles
router.get('/', listMotorcycles); // GET /motorcycles

export default router;
