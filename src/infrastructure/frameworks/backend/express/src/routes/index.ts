import { Router } from 'express';
import motorcycleRoutes from './motorcycle.routes';


const router = Router();

router.use('/api/motorcycles', motorcycleRoutes);


export default router;
