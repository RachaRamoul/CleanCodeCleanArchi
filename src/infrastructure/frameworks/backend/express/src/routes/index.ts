import { Router } from 'express';
import userRoutes from './user.routes';
import motorcycleRoutes from './motorcycle.routes';


const router = Router();

router.use('/users', userRoutes);
router.use('/api/motorcycles', motorcycleRoutes);


export default router;
