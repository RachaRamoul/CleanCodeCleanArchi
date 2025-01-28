import { Router } from 'express';
import motorcycleRoutes from './motorcycle.routes';
import companyRoutes from './company.routes';
import authRoutes from './auth.routes';


const router = Router();

router.use('/api/motorcycles', motorcycleRoutes);
router.use('/api/company', companyRoutes);
router.use('/api/auth', authRoutes);


export default router;
