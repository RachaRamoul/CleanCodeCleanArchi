import { Router } from 'express';
import motorcycleRoutes from './motorcycle.routes';
import motorcyclePartRoutes from './motorcycle-part.routes';
import companyRoutes from './company.routes';
import authRoutes from './auth.routes';


const router = Router();

router.use('/api/motorcycles', motorcycleRoutes);
router.use('/api/motorcycle-parts', motorcyclePartRoutes);
router.use('/api/company', companyRoutes);
router.use('/api/auth', authRoutes);


export default router;
